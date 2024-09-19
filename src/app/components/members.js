import '@/app/components/members.css';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import Image from 'next/image';
import github from '../../../public/about/github-mark-white.svg';
import linkedin from '../../../public/about/linkedinAbout.svg';

export default async function Members(props) {

    const api_key = 'AIzaSyD9OqzyCeZAZ0bgmNFjUaFsvnyFaoOycRU';
    const spreadsheetId = '1qVzwNK-eEVm0lt8zsQQx6KHtbB8b5Na_8X-H4MCM9s0';
    const spreadsheetName = 'members';

    const doc = new GoogleSpreadsheet(spreadsheetId, { apiKey: api_key });
    await doc.loadInfo();
    // console.log(doc.title);

    const sheet = doc.sheetsByTitle[spreadsheetName]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`

    await sheet.loadCells('A1:AB1');
    // const cols = ['Name', 'Email','UCSP Role','CubeSat Team','CubeSat Role','Rocketry Project(s)','Rocketry Role(s)','Github Link','Personal Site Link','Linkedin Link']
    // const a1 = sheet.getCell(0, 0); 
    // console.log(a1.value)

    const rows = await sheet.getRows();
    return (
        <>
            <div className={'bigTable'}>
                <table className={'table'}>
                    {/* Header of the table */}
                    <tr className={'tr_header'} id={'headRow'}>
                        <th className={'td'}>Name</th>
                        <th className={'td'}>Project, Team, and Role</th>
                        <th className={'td'} style={{textAlign:'right'}}>Links</th>
                    </tr>
                </table>

                <div style={{height:'50vh', overflowY:'auto', paddingBottom:'1.8em'}}>
                    <table className={'table'}>
                        {/* body of the table */}
                        {rows.map((each, i) => {
                                return(
                                    <tr key={i} id={'row'}>
                                        {each.get('Name') ? (
                                            <td className={'td'} id={'tdName'}>{each.get('Name')}</td>
                                        ): (
                                            <></>
                                        )} 
                                        {each.get('CubeSat Team') ? (
                                            <td className={'td'}>
                                                <span className={'tag'} id={'pulse'}>PULSE-A</span>
                                                {each.get('CubeSat Team')} {each.get('CubeSat Role')}
                                            </td>
                                        ): each.get('CubeSat Role') ? (
                                            <td className={'td'}>
                                                <span className={'tag'} id={'pulse'}>PULSE-A</span>{each.get('CubeSat Role')}
                                            </td>
                                        ): each.get('Rocketry Project(s)') ? (
                                            <td className={'td'}>
                                                <span className={'tag'} id={'rocketry'}>Rocketry</span>
                                                {each.get('Rocketry Project(s)')} {each.get('Rocketry Role(s)')}
                                            </td>
                                        ):(
                                            <td className={'td'}>
                                                Member
                                            </td>
                                        )} 
                                        <td className={'td'} id={'memLinks'} style={{textAlign:'right'}}>
                                            <Image 
                                                src={github}
                                                alt="Linkedin"
                                                className={'memLogo'}
                                            />
                                            <Image 
                                                src={linkedin}
                                                alt="Linkedin"
                                                className={'memLogo'}
                                            />
                                        </td>
                                    </tr>
                                )
                            }
                        )}

                    </table>
                </div>
            </div>
        </>
    )
};