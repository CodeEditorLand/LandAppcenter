import type { CurrentApp } from "../../../helpers/interfaces";
import { AppCenterOS } from "../../resources/constants";
import { Messages } from "../../resources/messages";
import { Strings } from "../../resources/strings";
import { type CustomQuickPickItem, VsCodeUI } from "../../ui/vscodeUI";
import { RNCPAppCommand } from "./rncpAppCommand";

export default class SetCurrentDeployment extends RNCPAppCommand {
	public async run(): Promise<boolean | void> {
		if (!(await super.run())) {
			return;
		}
		const currentApp: CurrentApp = await this.getCurrentApp(true);
		if (!currentApp) {
			VsCodeUI.ShowWarningMessage(Messages.NoCurrentAppSetWarning);
			return;
		}
		if (!this.hasCodePushDeployments(currentApp)) {
			VsCodeUI.ShowWarningMessage(Messages.NoDeploymentsWarning);
			return;
		}
		const deploymentOptions: CustomQuickPickItem[] =
			currentApp.currentAppDeployments.codePushDeployments.map(
				(deployment) => {
					return {
						label: deployment.name,
						description: "",
						target: deployment.key,
					};
				},
			);
		const deployment: CustomQuickPickItem = await VsCodeUI.showQuickPick(
			deploymentOptions,
			Strings.SelectCurrentDeploymentHint,
		);
		if (deployment) {
			this.saveCurrentApp(
				currentApp.identifier,
				AppCenterOS[currentApp.os],
				{
					currentDeploymentName: deployment.label,
					codePushDeployments:
						currentApp.currentAppDeployments.codePushDeployments,
				},
				currentApp.targetBinaryVersion,
				currentApp.type,
				currentApp.isMandatory,
				currentApp.appSecret,
			);
			VsCodeUI.ShowInfoMessage(
				Messages.YourCurrentDeploymentMessage(deployment.label),
			);
		}
	}
}
