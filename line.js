//sendLine関数を作る，msgを引数として受け取ってline botから自分にラインを送る
function sendLine(msg){ 
    //apiと接続
    const url = 'https://api.line.me/v2/bot/message/push';

    const options = {
        method: 'post',
        contentType: 'application/json',
        headers: {
            Authorization: `Bearer ${CONFIG.LINE_TOKEN}`,
            'X-Line-Retry-Key': Utilities.getUuid(),

        },
        payload: JSON.stringify({
            to: CONFIG.LINE_USER_ID,
            messages: [{ type:'text',text: msg}],
        }),
        muteHttpExceptions: true,
    };
    const res = UrlFetchApp.fetch(url,options);
    if(res.getResponseCode() === 200) {
        console.log('送信成功');
    } else {
        console.log(`失敗: ${res.getResponseCode()} ${res.getContentText()}`);
    }
}
