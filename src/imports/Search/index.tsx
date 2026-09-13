import svgPaths from "./svg-872in9amec";
import imgImage from "./ab8ed8d0b0db1e98ab7f1a31afba13769f282033.png";
import imgImage1 from "./eda2ee92bffb300537aa46caf4c65351a0a20dde.png";
import imgImage2 from "./86b5e6520800f3ee36c944ded270e36c1763aaed.png";
import imgImage3 from "./f501868cd62449885187cf0eb057a3fdee941589.png";
import imgImage4 from "./177e81a4cbbe443ae4d16ccaa140e5590a4e0a76.png";

function VuesaxLinearArrow({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[14px]"} data-name="vuesax/linear/arrow-3">
      <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-3">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <g id="arrow-3">
            <g id="Group">
              <path d={svgPaths.p2fa56a80} id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M3.92582 12.25V1.75" id="Vector_2" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p30359400} id="Vector_3" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M10.0742 1.75V12.25" id="Vector_4" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
            <g id="Vector_5" opacity="0" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function VuesaxLinearSearchNormal({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="vuesax/linear/search-normal">
      <div className="absolute contents inset-0" data-name="vuesax/linear/search-normal">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <g id="search-normal">
            <path d={svgPaths.p6857980} id="Vector" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M22 22L20 20" id="Vector_2" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Vector_3" opacity="0" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[11.333px] left-[308.67px] top-[21.33px] w-[66.601px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.333" preserveAspectRatio="none" viewBox="0 0 66.6006 11.333" width="66.6006">
        <g id="Frame 1000000891">
          <path d={svgPaths.p3cdd9080} fill="black" id="Cellular" />
          <path d={svgPaths.p2d936200} fill="black" id="Wifi" />
          <g id="Battery">
            <path d={svgPaths.p32b8d600} fill="black" id="Union" opacity="0.4" />
            <rect fill="black" height="7.33333" id="Capacity" rx="1.33333" width="18" x="44.2723" y="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Statusbar() {
  return (
    <div className="h-[51px] relative shrink-0 w-[390px]" data-name="Statusbar">
      <Frame3 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] h-[17px] leading-[normal] left-[38px] not-italic text-[14px] text-black text-center top-[calc(50%-5.5px)] tracking-[-0.28px] w-[30px]">9:41</p>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow-left">
          <path d="M9.57 5.93L3.5 12L9.57 18.07" id="Vector" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M20.5 12H3.67" id="Vector_2" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return <div className="h-[9px] relative shrink-0 w-[24px]" />;
}

function TitleBackIcon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title/Back-icon">
      <ArrowLeft />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#374151] text-[20px] whitespace-nowrap">All Doctors</p>
      <Frame42 />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Search bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <VuesaxLinearSearchNormal className="relative shrink-0 size-[24px]" />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">Search doctor...</p>
        </div>
      </div>
    </div>
  );
}

function SearchTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-full" data-name="Search & Title">
      <TitleBackIcon />
      <SearchBar />
    </div>
  );
}

function ListTab() {
  return (
    <div className="bg-[#1c2a3a] content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[61px] shrink-0" data-name="List Tab">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">All</p>
    </div>
  );
}

function ListTab1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[45px] shrink-0" data-name="List Tab">
      <div aria-hidden className="absolute border border-[#1c2a3a] border-solid inset-0 pointer-events-none rounded-[45px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#1c2a3a] text-[14px] whitespace-nowrap">General</p>
    </div>
  );
}

function ListTab2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[45px] shrink-0" data-name="List Tab">
      <div aria-hidden className="absolute border border-[#1c2a3a] border-solid inset-0 pointer-events-none rounded-[45px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#1c2a3a] text-[14px] whitespace-nowrap">Cardiologist</p>
    </div>
  );
}

function ListTab3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[45px] shrink-0" data-name="List Tab">
      <div aria-hidden className="absolute border border-[#1c2a3a] border-solid inset-0 pointer-events-none rounded-[45px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#1c2a3a] text-[14px] whitespace-nowrap">Dentist</p>
    </div>
  );
}

function TabBar() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip pl-[24px] relative shrink-0 w-[390px]" data-name="Tab bar">
      <ListTab />
      <ListTab1 />
      <ListTab2 />
      <ListTab3 />
    </div>
  );
}

function SearchFilter() {
  return (
    <div className="relative shrink-0 w-full" data-name="Search & Filter">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[24px] relative size-full">
          <SearchTitle />
          <TabBar />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Default</p>
      <VuesaxLinearArrow className="relative shrink-0 size-[14px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#1f2a37] text-[16px] whitespace-nowrap">532 founds</p>
      <Frame16 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#1f2a37] text-[16px] whitespace-nowrap">Dr. David Patel</p>
      <div className="h-[13.35px] relative shrink-0 w-[15px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.35" preserveAspectRatio="none" viewBox="0 0 15 13.35" width="15">
          <path d={svgPaths.p18bded80} id="Vector" stroke="#1F2A37" />
        </svg>
      </div>
    </div>
  );
}

function VuesaxLinearLocation() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/location">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="location">
          <path d={svgPaths.pf58b000} id="Vector" stroke="#4B5563" />
          <path d={svgPaths.pc2dc400} id="Vector_2" stroke="#4B5563" />
          <path d={svgPaths.p1b7d7200} id="Vector_3" opacity="0" stroke="#4B5563" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="relative shrink-0 size-[14px]" data-name="vuesax/linear/location">
        <VuesaxLinearLocation />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#4b5563] text-[14px]">Cardiology Center, USA</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[15.826px] relative shrink-0 w-[15.932px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.8269" preserveAspectRatio="none" viewBox="0 0 15.9322 15.8269" width="15.9322">
        <g id="Frame 1000000955">
          <path d={svgPaths.p375b3780} fill="#FEB052" id="Subtract" />
          <path d={svgPaths.pfd9a080} fill="#FEB052" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame6 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">5</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame7 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 13 1" width="13">
                <line id="Line 2" stroke="#E5E7EB" x2="13" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">1,872 Reviews</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">Cardiologist</p>
      <Frame14 />
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[12px] relative size-full">
        <Frame9 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 197 1" width="197">
              <line id="Line 4" stroke="#E5E7EB" x2="197" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame10 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#1f2a37] text-[16px] whitespace-nowrap">Dr. Jessica Turner</p>
      <div className="h-[13.35px] relative shrink-0 w-[15px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.35" preserveAspectRatio="none" viewBox="0 0 15 13.35" width="15">
          <path d={svgPaths.p18bded80} id="Vector" stroke="#1F2A37" />
        </svg>
      </div>
    </div>
  );
}

function VuesaxLinearLocation1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/location">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="location">
          <path d={svgPaths.pf58b000} id="Vector" stroke="#4B5563" />
          <path d={svgPaths.pc2dc400} id="Vector_2" stroke="#4B5563" />
          <path d={svgPaths.p1b7d7200} id="Vector_3" opacity="0" stroke="#4B5563" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="relative shrink-0 size-[14px]" data-name="vuesax/linear/location">
        <VuesaxLinearLocation1 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#4b5563] text-[14px]">{`Women's Clinic,Seatle,USA`}</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[15.826px] relative shrink-0 w-[15.932px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.8269" preserveAspectRatio="none" viewBox="0 0 15.9322 15.8269" width="15.9322">
        <g id="Frame 1000000955">
          <path d={svgPaths.p375b3780} fill="#FEB052" id="Subtract" />
          <path d={svgPaths.pfd9a080} fill="#FEB052" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame20 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">4.9</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame19 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 13 1" width="13">
                <line id="Line 2" stroke="#E5E7EB" x2="13" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">127 Reviews</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">Gynecologist</p>
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[12px] relative size-full">
        <Frame13 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 197 1" width="197">
              <line id="Line 4" stroke="#E5E7EB" x2="197" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame15 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#1f2a37] text-[16px] whitespace-nowrap">Dr. Michael Johnson</p>
      <div className="h-[13.35px] relative shrink-0 w-[15px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.35" preserveAspectRatio="none" viewBox="0 0 15 13.35" width="15">
          <path d={svgPaths.p18bded80} id="Vector" stroke="#1F2A37" />
        </svg>
      </div>
    </div>
  );
}

function VuesaxLinearLocation2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/location">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="location">
          <path d={svgPaths.pf58b000} id="Vector" stroke="#4B5563" />
          <path d={svgPaths.pc2dc400} id="Vector_2" stroke="#4B5563" />
          <path d={svgPaths.p1b7d7200} id="Vector_3" opacity="0" stroke="#4B5563" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="relative shrink-0 size-[14px]" data-name="vuesax/linear/location">
        <VuesaxLinearLocation2 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#4b5563] text-[14px]">Maple Associates, NY,USA</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[15.826px] relative shrink-0 w-[15.932px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.8269" preserveAspectRatio="none" viewBox="0 0 15.9322 15.8269" width="15.9322">
        <g id="Frame 1000000955">
          <path d={svgPaths.p375b3780} fill="#FEB052" id="Subtract" />
          <path d={svgPaths.pfd9a080} fill="#FFD7A8" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame27 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">4.7</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame26 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 13 1" width="13">
                <line id="Line 2" stroke="#E5E7EB" x2="13" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">5,223 Reviews</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">Orthopedic Surgery</p>
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[12px] relative size-full">
        <Frame22 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 197 1" width="197">
              <line id="Line 4" stroke="#E5E7EB" x2="197" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame23 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#1f2a37] text-[16px] whitespace-nowrap">Dr. Emily Walker</p>
      <div className="h-[13.35px] relative shrink-0 w-[15px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.35" preserveAspectRatio="none" viewBox="0 0 15 13.35" width="15">
          <path d={svgPaths.p18bded80} id="Vector" stroke="#1F2A37" />
        </svg>
      </div>
    </div>
  );
}

function VuesaxLinearLocation3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/location">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="location">
          <path d={svgPaths.pf58b000} id="Vector" stroke="#4B5563" />
          <path d={svgPaths.pc2dc400} id="Vector_2" stroke="#4B5563" />
          <path d={svgPaths.p1b7d7200} id="Vector_3" opacity="0" stroke="#4B5563" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="relative shrink-0 size-[14px]" data-name="vuesax/linear/location">
        <VuesaxLinearLocation3 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#4b5563] text-[14px]">Serenity Pediatrics Clinic</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[15.826px] relative shrink-0 w-[15.932px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.8269" preserveAspectRatio="none" viewBox="0 0 15.9322 15.8269" width="15.9322">
        <g id="Frame 1000000955">
          <path d={svgPaths.p375b3780} fill="#FEB052" id="Subtract" />
          <path d={svgPaths.pfd9a080} fill="#FEB052" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame34 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">5</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame33 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 13 1" width="13">
                <line id="Line 2" stroke="#E5E7EB" x2="13" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">405 Reviews</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">Pediatrics</p>
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[12px] relative size-full">
        <Frame29 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 197 1" width="197">
              <line id="Line 4" stroke="#E5E7EB" x2="197" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame30 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#1f2a37] text-[16px] whitespace-nowrap">Dr. Emily Walker</p>
      <div className="h-[13.35px] relative shrink-0 w-[15px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.35" preserveAspectRatio="none" viewBox="0 0 15 13.35" width="15">
          <path d={svgPaths.p18bded80} id="Vector" stroke="#1F2A37" />
        </svg>
      </div>
    </div>
  );
}

function VuesaxLinearLocation4() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/location">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="location">
          <path d={svgPaths.pf58b000} id="Vector" stroke="#4B5563" />
          <path d={svgPaths.pc2dc400} id="Vector_2" stroke="#4B5563" />
          <path d={svgPaths.p1b7d7200} id="Vector_3" opacity="0" stroke="#4B5563" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="relative shrink-0 size-[14px]" data-name="vuesax/linear/location">
        <VuesaxLinearLocation4 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame5 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#4b5563] text-[14px]">Serenity Pediatrics Clinic</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="h-[15.826px] relative shrink-0 w-[15.932px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.8269" preserveAspectRatio="none" viewBox="0 0 15.9322 15.8269" width="15.9322">
        <g id="Frame 1000000955">
          <path d={svgPaths.p375b3780} fill="#FEB052" id="Subtract" />
          <path d={svgPaths.pfd9a080} fill="#FEB052" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame41 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">5</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame40 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 13 1" width="13">
                <line id="Line 2" stroke="#E5E7EB" x2="13" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">405 Reviews</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">Pediatrics</p>
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[12px] relative size-full">
        <Frame36 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 197 1" width="197">
              <line id="Line 4" stroke="#E5E7EB" x2="197" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame37 />
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cards">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[10px] relative size-full">
        <Text />
        <div className="bg-white drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-[342px]" data-name="Card 01">
          <div aria-hidden className="absolute border-[#f3f4f6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[12px] relative size-full">
              <div className="relative rounded-[12px] shrink-0 size-[109px]" data-name="Image">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                  <img alt="" className="absolute h-full left-[-64.43%] max-w-none top-0 w-[178.51%]" src={imgImage} />
                </div>
              </div>
              <Frame11 />
            </div>
          </div>
        </div>
        <div className="bg-white drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-[342px]" data-name="Card 02">
          <div aria-hidden className="absolute border-[#f3f4f6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[12px] relative size-full">
              <div className="relative rounded-[12px] shrink-0 size-[109px]" data-name="Image">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                  <img alt="" className="absolute h-full left-[-59.86%] max-w-none top-0 w-[178.51%]" src={imgImage1} />
                </div>
              </div>
              <Frame12 />
            </div>
          </div>
        </div>
        <div className="bg-white drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-[342px]" data-name="Card 03">
          <div aria-hidden className="absolute border-[#f3f4f6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[12px] relative size-full">
              <div className="relative rounded-[12px] shrink-0 size-[109px]" data-name="Image">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                  <img alt="" className="absolute h-full left-[-36.32%] max-w-none top-0 w-[178.51%]" src={imgImage2} />
                </div>
              </div>
              <Frame21 />
            </div>
          </div>
        </div>
        <div className="bg-white drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-[342px]" data-name="Card 04">
          <div aria-hidden className="absolute border-[#f3f4f6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[12px] relative size-full">
              <div className="relative rounded-[12px] shrink-0 size-[109px]" data-name="Image">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                  <img alt="" className="absolute h-full left-[-35.17%] max-w-none top-0 w-[178.51%]" src={imgImage3} />
                </div>
              </div>
              <Frame28 />
            </div>
          </div>
        </div>
        <div className="bg-white drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-[342px]" data-name="Card 5">
          <div aria-hidden className="absolute border-[#f3f4f6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[12px] relative size-full">
              <div className="relative rounded-[12px] shrink-0 size-[109px]" data-name="Image">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                  <img alt="" className="absolute h-full left-[-57.72%] max-w-none top-0 w-[178.51%]" src={imgImage4} />
                </div>
              </div>
              <Frame35 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px overflow-clip relative w-full" data-name="Content">
      <SearchFilter />
      <Cards />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] h-[844px] items-start right-0 w-[390px]" data-name="Container">
      <Statusbar />
      <Content />
    </div>
  );
}

export default function Search() {
  return (
    <div className="bg-white overflow-clip relative rounded-[54px] size-full" data-name="Search">
      <Container />
    </div>
  );
}