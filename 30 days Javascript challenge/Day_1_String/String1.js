let names="    chinmaya  kumar   das ";
let age=22;
let str="1"

console.log(names.length);
console.log(names.indexOf("k"));
console.log(names.charAt(5));
console.log(names.includes("k u"));
console.log(names.charCodeAt(10));
console.log(names.trim());
console.log(names.trimStart());
console.log(names.trimEnd());
console.log(names.replace("kumar","kumara"));
console.log(names.replaceAll("a","b"));

console.log(names.lastIndexOf("a"));
console.log(names.substring(1,10));
console.log(names.substr(6,5));
console.log(names.split(" "));
console.log(names.search("chinmaya"));
console.log(names.slice(5,10));
console.log(names.concat(" is very good boy"));
console.log(names.concat(age));
console.log((5,"0"));
console.log();

console.log(names.toLocaleLowerCase());
console.log(names.toUpperCase());
console.log(str.padEnd(5,"0"));
console.log(str.padStart(5,"0"));
console.log(str.repeat(10));
console.log(str.at(2));
console.log(names.match("a"));
console.log(names.matchAll("a"));
console.log(`${str} ${names}`);
// {let x=10
// console.log(x+++x);}


// let x=" dnnj jnd jdn"
// console.log(x.split(" "));
// console.log("sxsx".length);
// let title=" chinmaya KUmar DasH"
// let newstr="";
//     let Wordarr=title.split(" ");
//     for(let i=0;i<title.length;i++){
//         for(let j=0;j<Wordarr[j];j++){
//             if(Wordarr[j].length==2){
//                 newstr.concat(Wordarr[j].toLowerCase());
//             }else{
//                 let capword=(Wordarr[j].toUpperCase()).concat(Wordarr[j].substring(1,Wordarr[j].length)) ;
//                 newstr.concat(" ",capword);
//             }
//         }
//     }
//     console.log(newstr);
let title="Chinmay Kumar Das"
let c=title.split(" ")
console.log(c);