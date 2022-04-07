// ==UserScript==
// @name     196²
// @version  1.3
// @grant    none
// @match  https://*reddit.com/r/196/
// @updateURL    https://github.com/BigweldIndustries/196-Squared/raw/main/script.user.js
// @downloadURL  https://github.com/BigweldIndustries/196-Squared/raw/main/script.user.js
// @author  Bigweld
// @description  A simple userscript to remove repetitive posts from the subreddit r/196
// ==/UserScript==

// List of words that are commonly found in repetitive posts
var cringe = ["trans","selfie","nft","spronkus","upvote","gay","project","nazi","terf","ignore","karma","awards","i fucking love","metaverse","crypto","blockchain","all my homies","political","ok ima fight","asexual","chaser","harry potter","rowling"];

function check(){
var posts = document.getElementsByClassName("Post");
 for (var i=0; i < posts.length; i++) {
    var title = posts[i].getElementsByClassName("_eYtD2XCVieq6emjKBH3m");
    var good = true;
 
 
     for (var j=0; j < cringe.length; j++) {
         if (title[0].innerText.toLowerCase().includes(cringe[j])){
                good = false;
         }    
     
     }
 
     if (good == false){
        posts[i].parentNode.parentNode.parentNode.removeChild(posts[i].parentNode.parentNode);
     }
 }
}

setInterval(check,100);
