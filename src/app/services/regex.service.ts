
// import XRegExp from 'xregexp'; //TODO: why this is not working and we have to use CDNv

//SOLUTION 1
import * as XRegExp from 'xregexp';
import {Subject} from 'rxjs/Subject';
/*
this is working solution from
  https://stackoverflow.com/a/43122829/6178783
*/
/* SOLUTION 2
declare var require: any; //have to tell angular about global variable 'require' first
const XRegExp=require("xregexp");
*/

export class RegexService{
  regexInput:string;
  textInput:string;
  matchCount:number;
  flags:string="";
  regex:RegExp;
  replacedText:string;
  replaceTextSubject=new Subject();

  constructor(){
    console.log('constructor is being called');
  }
  regexFieldChange(newRegex:string){
    this.regexInput=newRegex;
    this.exec();
  }
  textFieldChange(newText:string){
    this.textInput=newText;
    this.exec();
  }
  flagFieldChange(newFlags:string){
    this.flags=newFlags;
    this.exec();
  }
  exec(){
    console.clear()
    this.regex=XRegExp(this.regexInput,this.flags);
    console.log(this.regexInput+"  "+this.flags);
    // console.log(this.textInput);

    //if both values are entered
    if(this.regexInput!=null && this.textInput!=null) {
      this.matchCount=0;
      this.replacedText= XRegExp.replace(this.textInput, this.regex, (match)=>{
        /*
         mark whatever is matched according to regex, with something which can't occur in string,
         now we can color or style this text
         */
        this.matchCount++;
        return "<span>" + match + "</span>";
      });
      this.replaceTextSubject.next(this.replacedText);
    }
    console.log(this.replacedText+" "+this.matchCount+" matches");
  }
}
