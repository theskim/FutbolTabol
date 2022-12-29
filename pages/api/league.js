export default async function LeagueAPIFetch(leagueID, year) {
  const url = 'https://api-football-standings.azharimm.dev/leagues/' + leagueID + '/standings?season=' + year + '&sort=asc';
  const options = {
    "method": "GET",
    "verify": false,
  }
  const fetched = await fetch(url, options);
  const res = await fetched.json();
  return res;
}