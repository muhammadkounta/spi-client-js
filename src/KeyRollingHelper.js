class KeyRollingHelper {
    static PerformKeyRolling(krRequest, currentSecrets)
    {
        let m = new Message(krRequest.Id, Events.KeyRollResponse, {"status": "confirmed"}, true);
        let newSecrets = new Secrets(Crypto.GenerateHash(currentSecrets.EncKey).toUpperCase(),Crypto.GenerateHash(currentSecrets.HmacKey).toUpperCase());
        return new KeyRollingResult(m, newSecrets);
    }
}

class KeyRollingResult {
    constructor(keyRollingConfirmation, newSecrets) {
        this.KeyRollingConfirmation = keyRollingConfirmation;
        this.NewSecrets = newSecrets;
    }
}
