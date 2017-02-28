import * as phone from 'nativescript-phone';

export function callHome() {
    phone.sms(['615-123-4567', '615-474-2929'], 'Hello egghead')
        .then((result) => {
            console.log(result);
        })
}