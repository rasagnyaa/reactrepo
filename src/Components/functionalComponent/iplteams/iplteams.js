
const CricBuzz=()=>{
const iplTeams=[{
    teamName:"SRH",
    teamPlayers:["Pat Cummins","head","bhuvi","Abhishek Sharma","Nitish Kumar Reddy"],
    won:5,
    winningYears:[2010,2011,2012,2013,2014,2015],
    teamLogo:"https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png"
},{
    teamName:"CSK",
    teamPlayers:["Ms Dhoni","Ruturaj Gikwad","Matheesha Pathirana","Rachin Ravindra","Shivam Dube"],
    won:4,
    winningYears:[2016,2017,2018,2019], 
    teamLogo:"https://i.pinimg.com/originals/39/0f/c7/390fc716070ce65f3cc496d84b909812.jpg"
},{teamName:"GT",
    teamPlayers:["Shubman Gill","Rashid Khan","Kane Williams","Mohammed shami","Sai Sudharsan"],
    won:3,
    winningYears:[2020,2021,2022],
    teamLogo:"https://imgk.timesnownews.com/media/Gujarat_Titans_logo.png"
},{
    teamName:"RCB",
    teamPlayers:["Virat Kohli","Mohammed siraj","Akash Deep","Suyash Prabhudessai","Mahipal"],
    won:0,
    winningYears:[],
    teamLogo:"https://c.ndtvimg.com/2020-02/1r5vdst_rcb_625x300_14_February_20.jpg"
},{
    teamName:"RR",
    teamPlayers:["Sanju Samson","Yashasvi Jaiswal","Riyan Parag","Jos Buttler","Tanush"],
    won:2,
    winningYears:[2023,2024],
    teamLogo:"https://static.toiimg.com/thumb/msid-77990255,width-1280,height-720,resizemode-4/77990255.jpg"
},

]
function filterdData(iplTeams){
const newTeams=iplTeams.filter((eachTeam)=>eachTeam.won>=3);
return newTeams
}
return (
    <div>
      {filterdData(iplTeams).map((eachTeam) => {
        return (
          <div>
            <h2>{eachTeam.teamName}</h2>
            <img src={eachTeam.teamLogo} width={100} height={100}alt="hlo" />
            {eachTeam.teamPlayers.map((eachPlayer) => {
              return (
                <>
                  <li>{eachPlayer}</li>
                </>
              );
            })}
          </div>
        );
      })}
     
    </div>
  );
}
export default CricBuzz