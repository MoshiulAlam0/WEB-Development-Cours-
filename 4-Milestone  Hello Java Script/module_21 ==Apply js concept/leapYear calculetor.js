/* ***.when is the gregorian calendar released ?
 answer:The Gregorian calendar was instituted by Pope Gregory XIII in 1584.
and is today in worldwide use */

 /*লিপ ইয়ার (Leap Year ) বের করার কন্ডিশন হলো দুই তা :::

 শর্ত ১. সালকে  ৪ দ্বারা ভাগ করলে  যদি নিঃশেষে বিভাজ্য এবং
 ১০০ দ্বারা ভাগ করলে  যদি নিঃশেষে বিভাজ্য না হয় তবে সেই সালটি লিপ ইয়ার (leap Year )হবে। 
  codition:((year % 4 === 0) && (year % 100 !== 0 ));
  
শর্ত ২. সালকে (Year ) ৪০০ দ্বারা ভাগ করা হলে 
যদি নিঃশেষে বিভাজ্য তবে সালটি  লেপ ইয়ার (Leap Year ) হবে।
condition:  (year % 400 === 0);
  
  note:[প্রথমে দেখতে হবে যে শর্ত ১ সত্য কি না যদি সত্য হয় তলে তো কোনো কিচ্চায় নাই ডাইরেক্ট লিপ ইয়ার ()।
আর যদি সত্য না হয়, তবে দেখতে হবে শর্ত ২ সত্য কি না, সত্য হলে লিপ ইয়ার  ()।
আর যদি দেখা যাই যে , শর্ত ১ এবং শর্ত ২ দুটাই সত্য না (মিথ্যা ) তাহলে সালটি Not Leap Year।]
 */


function isleapYear(year){
    if (year >= 1582 ){
        if (((year % 4 === 0) && (year % 100 !== 0 )) || (year % 400 === 0)){
            
            return 'Yes!';
        }
        return 'No!';
    }
    return 'this year is not available in gregorian calendar. please input more than 1582'
}
let yourYear = 1584;
let leapYear = isleapYear(yourYear);
console.log('is', yourYear, 'Leap year?',leapYear);

