
function loadTeamData()
{var images=[];
 var captions=[];
 
 var team=JSON.parse(teamMembers);
 for(var i=0;i<team.length;++i)
  {
   images.push(document.createElement("img"));
   
   document.getElementById('ourTeam').appendChild(images[i]);
   
   images[i].setAttribute("id","picture"+i);
   images[i].setAttribute("src",team[i].image);
   
  }
 for(var i=0;i<team.length;++i)
  {
   captions.push(document.createElement("div"));
   
   document.getElementById('ourTeam').appendChild(captions[i]);
   
   captions[i].setAttribute("id","caption"+i);
   
   var el=document.getElementById("caption"+i);
   el.innerHTML="<p>"+team[i].name+"</p><p>"+team[i].email+"</p>";
  }
console.log("Team Data Loaded");
} 

function showUpDown(){
 document.getElementById('companyHeader').style.display="block";
 document.getElementById('checkprices').style.display="block";

}