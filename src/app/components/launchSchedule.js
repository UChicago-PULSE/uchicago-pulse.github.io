import { GoogleSpreadsheet } from 'google-spreadsheet';

export default async function launchSched(props) {

    const api_key = 'AIzaSyD9OqzyCeZAZ0bgmNFjUaFsvnyFaoOycRU';
    const spreadsheetId = '1qVzwNK-eEVm0lt8zsQQx6KHtbB8b5Na_8X-H4MCM9s0';
    const spreadsheetName = 'launchSchedule';

    const doc = new GoogleSpreadsheet(spreadsheetId, { apiKey: api_key });
    await doc.loadInfo();
    // console.log(doc.title);

    const sheet = doc.sheetsByTitle['launchSchedule']; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`

    await sheet.loadCells('A1:AB1');
    // const cols = ['Name', 'Email','UCSP Role','CubeSat Team','CubeSat Role','Rocketry Project(s)','Rocketry Role(s)','Github Link','Personal Site Link','Linkedin Link']
    // const a1 = sheet.getCell(0, 0); 
    // console.log(a1.value)

    const rows = await sheet.getRows();
    return (
        <>
            <p className='launchT'>Upcoming Launch Schedule</p>
            <div className='scrollBlock'>
                {
                    rows.map((each, i) => {
                        return (
                            <p key={i} className='each'>{each.get('Date')} {each.get('Time')} @ {each.get('LaunchLocation')}</p>
                        )
                    })
                }
            </div>
        </>
    )
};