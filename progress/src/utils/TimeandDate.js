// for one single day 86400000 ms
//this function retuen array of prevous step back days
export default function TimeandDate(stepBack) {
    let out = [];
    let today = Date.parse(new Date());
    for (let i=0; i < stepBack; i++) {
        let time = new Date(new Date(today - (i*86400000) ));
        let date = [time.getDate(), time.getMonth()+1, time.getFullYear()].join("/");
        out.push(date)
    }
    return out;
}