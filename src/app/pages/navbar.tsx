
import {ShieldEllipsis, Sparkles} from "lucide-react";


export default function NavBar() {
  return (
    <div className="
        /*Global*/ w-full h-20  absolute z-50 flex items-center justify-between bg-gray-1 bg-[rgba(0,0,0,0.5)] backdrop-blur-lg
        /*Mobile*/ px-5 
        /*Medium*/ sm:px-10
        /*Large*/ md:px-15 
        /*Desktop*/lg:px-20">
        <div className="
            /*Global Design*/ flex h-20 items-center justify-center gap-2 
            /*Mobile Deisgn*/
            /**/
            /**/
        ">
            <ShieldEllipsis className="text-[#f78f3f] w-10 h-10"/>
            <span className="text-2xl font-bold hidden hidden sm:inline lg:inline md:inline text-white">MarvelVerse</span>
        </div>

        <div className="
            /*Global Design*/ flex h-20 items-center justify-center gap-2 
            /*Mobile Deisgn*/
            /**/
            /**/
        ">
            <div className="flex items-center justify-center border border-[#f78f3f] rounded-2xl px-2 cursor-pointer gap-1">
                <Sparkles className="w-3 h-3 text-[#f78f3f]"/>
                <span className="text-[12px] text-[#FFFFFF] select-none">Fan Experience</span>
            </div>
            <div>
                {/* <button className="flex items-center justify-center border border-[#f78f3f] rounded-2xl px-2 cursor-pointer gap-1">
                    <span className="text-[12px] text-[#FFFFFF] select-none">Login</span>
                </button> */}
            </div>
        </div>
    </div>
  );
}
