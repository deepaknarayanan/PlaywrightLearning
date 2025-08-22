function Launchbrowser(browsername)
{
    
if ( browsername == "Chrome")
{
    console.log("Chrome browser is Opened");
}
else
{
    console.log("Launch Other than chrome browser")
}
}


function Runtest(testtype) 
{
 switch(testtype)
 {
    case "smoke": console.log("Running somke test")
    break
    case "sanity":console.log("Running sanity test") 
    break
    case "regression" : console.log("Running regression test")
    break
    case "smoke" : console.log("Running smoke test")
    break
 }
 return;
}

Launchbrowser("Chrome");
Runtest("smoke");