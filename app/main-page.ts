import * as phone from 'nativescript-phone';

export function callHome() {
    phone.sms(['615-123-1234', '615-123-4858'], 'Hello egg head')
        .then((result) => {
            console.log(result);
        })
}