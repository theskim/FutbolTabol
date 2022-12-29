import LeagueAPIFetch from '../pages/api/league';
import Select from 'react-select'
import {useState, useEffect} from 'react';
import styled from "styled-components";

const TableRow = styled.tr`
   align-items: left;
   align-text: left;      
`;

const TableData = styled.td`   
    font-size: min(1.5rem, 3vw);     
    align-items: left;
    align-text: left;
    padding: 1vw 1vw;
	  border: 1px solid rgb(91, 58, 255);
		background-color: #312B3A;
		color: #E7E7E7;
`;

export default function Table() {
  const [league, setLeague] = useState('null');
	const [leagueID, setLeagueID] = useState('eng.1');

	const getLeague = async () => {
    let res = await LeagueAPIFetch(leagueID, 2022);
		setLeague(res);
    console.log(res);
	};

	useEffect(() => {
		getLeague();
	}, [leagueID]);

  const leagues = [
      {
          value: "eng.1",
          label: "English Premier League",
      },
      {
          value: "esp.1",
          label: "Spanish Primera División",
      },
      {
          value: "ita.1",
          label: "Italian Serie A",
      },
      {
          value: "ger.1",
          label: "German Bundesliga",
      },
      {
          value: "ned.1",
          label: "Dutch Eredivisie",
      },
      {
          value: "fra.1",
          label: "French Ligue 1",
      },
      {
          value: "por.1",
          name: "Portuguese Liga",
      },
      {
          value: "rus.1",
          label: "Russian Premier League",
      },
      {
          value: "mex.1",
          label: "Mexican Liga BBVA MX",
      },
      {
          value: "chn.1",
          label: "Chinese Super League",
      },
      {
          value: "bra.1",
          label: "Brazilian Serie A",
      },
      {
          value: "jpn.1",
          label: "Japanese J League",
      },
      {
          value: "mys.1",
          label: "Malaysian Super League",
      },
      {
          value: "sgp.1",
          label: "Singaporean Premier League",
      },
      {
          value: "tha.1",
          label: "Thai Premier League",
      },
      {
          value: "idn.1",
          label: "Indonesian Liga 1",
      },
      {
          value: "arg.1",
          label: "Argentine Liga Profesional de Fútbol",
      },
      {
          value: "tur.1",
          label: "Turkish Super Lig",
      },
      {
          value: "aus.1",
          label: "Australian A-League",
      },
  ];

  const customStyles = {
    container: provided => ({
      ...provided,
      width: 300,
      color: '#000',
      marginBottom: '5vh',
    })
  };
  
  return (
    <>
      <Select options={leagues} onChange={(choice) => {setLeagueID(choice.value)}} styles={customStyles}/> 
      {league && league.data && (
        <>   
          <table>
            <thead>
                <TableRow>
                  <TableData>R</TableData>
                  <TableData>Name</TableData>
                  <TableData>GP</TableData>
                  <TableData>W</TableData>
                  <TableData>D</TableData>
                  <TableData>L</TableData>
                  <TableData>Points</TableData>
                  <TableData>GD</TableData>
                  <TableData>Status</TableData>
                </TableRow>
            </thead>
            <tbody>
                {league.data.standings.map((teaminfo, i) => (
                  <TableRow key={i}>
                    <TableData>
                      {teaminfo.stats[10] && teaminfo.stats[10].displayValue}
                    </TableData>
                    <TableData>
                      {teaminfo.team.logos && teaminfo.team.logos[0] && <img src={teaminfo.team.logos[0].href} style={{width: 'min(1.75rem, 3vw)'}}/>}&nbsp;&nbsp;
                      {teaminfo.team.name}
                    </TableData>
                    <TableData>
                      {teaminfo.stats[0] && teaminfo.stats[0].displayValue}
                    </TableData>
                    <TableData>
                      {teaminfo.stats[6] && teaminfo.stats[6].displayValue}
                    </TableData>
                    <TableData>
                      {teaminfo.stats[5] && teaminfo.stats[5].displayValue}
                    </TableData>
                    <TableData>
                      {teaminfo.stats[1] && teaminfo.stats[1].displayValue}
                    </TableData>
                    <TableData>
                      {teaminfo.stats[2] && teaminfo.stats[2].displayValue}
                    </TableData>
                    <TableData>
                      {teaminfo.stats[8] && teaminfo.stats[8].displayValue}
                    </TableData>
                    <TableData>
                      {teaminfo.note ? (teaminfo.note.description) : "N/A"}
                    </TableData>
                  </TableRow>
                ))}
            </tbody>
          </table>
          </>)}
      </>
   );
}