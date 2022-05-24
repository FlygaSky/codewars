// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
    let domainName = ''
    let indexesOfDots = []
    for (i = 0; i < url.length; i++) {
        if (url[i] === '.') {
            indexesOfDots.push(i)
        }
    }
    let indexAfterHttp = url.indexOf("://") + 3
    
    // if url has www --> domain name between . and .
    if(url.includes('www')){
        domainName = url.slice(indexesOfDots[0] + 1, indexesOfDots[1])
    }
    // if url has http/https :// without www --> domain name between :// and .
    else if(url.includes('http')){
        domainName = url.slice(indexAfterHttp, indexesOfDots[0])
    }
    // if url has no http nor www --> domain name between index 0 and .
    else{
        domainName = url.slice(0, indexesOfDots[0])
    }

    return domainName
  }

  console.log(domainName("https://www.cnet.com"))
  console.log(domainName("http://github.com/carbonfive/raygun"))
  
// SOLUTION:
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };