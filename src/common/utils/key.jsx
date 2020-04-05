import { JSEncrypt } from "jsencrypt";

function encrypt(publicKey, data)  {
    let key = new JSEncrypt();
    key.setPublicKey(publicKey)
    return key.encrypt(data)
}

function decrypt(privateKey, data)  {
    let key = new JSEncrypt();
    key.setPrivateKey(privateKey);
    return key.decrypt(data, 'utf8')
}

let key = {
    encrypt,
    decrypt
}

export default key;
/**v1.0.0 */
