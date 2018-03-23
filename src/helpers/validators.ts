export class Validators {
    public static ValidAppCenterAppName = /^([a-zA-Z0-9-_.]{1,100})\/([a-zA-Z0-9-_.]{1,100})$/;

    public static ValidateProjectName(name: string): boolean {
        if (!String(name).match(/^[$A-Z_][0-9A-Z_$]*$/i)) {
            return false;
        }
        if (name === 'React') {
            // exceptional case
            return false;
        }
        return true;
    }
}
