export default function LargeCalendar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[345px] overflow-clip relative w-[329px]"} data-name="Large / Calendar">
      <div className="absolute bg-white h-[345px] left-0 rounded-[21.67px] top-0 w-[329px]" data-name="Background" />
      <div className="absolute contents left-[171px] top-[14px]" data-name="Mini Calendar">
        <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[171px] not-italic text-[#ee5c51] text-[12px] top-[14px] whitespace-nowrap">JUNE</p>
        <div className="absolute left-[194px] size-[18px] top-[106px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
            <circle cx="9" cy="9" fill="#EE5C51" id="Ellipse 3" r="9" />
          </svg>
        </div>
        <div className="[word-break:break-word] absolute contents font-['Pretendard',sans-serif] font-medium leading-[0] left-[173px] not-italic text-[10px] text-center top-[123px]" data-name="Week 5">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[183px] size-[20px] text-[rgba(0,0,0,0.5)] top-[133px]">
            <p className="leading-[normal]">28</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[203px] size-[20px] text-black top-[133px]">
            <p className="leading-[normal]">29</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[223px] size-[20px] text-black top-[133px]">
            <p className="leading-[normal]">30</p>
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents font-['Pretendard',sans-serif] font-medium leading-[0] left-[173px] not-italic text-[10px] text-center top-[104px]" data-name="Week 4">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[183px] size-[20px] text-[rgba(0,0,0,0.5)] top-[114px]">
            <p className="leading-[normal]">21</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[203px] size-[20px] text-white top-[114px]">
            <p className="leading-[normal]">22</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[223px] size-[20px] text-black top-[114px]">
            <p className="leading-[normal]">23</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[243px] size-[20px] text-black top-[114px]">
            <p className="leading-[normal]">24</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[263px] size-[20px] text-black top-[114px]">
            <p className="leading-[normal]">25</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[283px] size-[20px] text-black top-[114px]">
            <p className="leading-[normal]">26</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[303px] size-[20px] text-[rgba(0,0,0,0.5)] top-[114px]">
            <p className="leading-[normal]">27</p>
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents font-['Pretendard',sans-serif] font-medium leading-[0] left-[173px] not-italic text-[10px] text-center top-[85px]" data-name="Week 3">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[183px] size-[20px] text-[rgba(0,0,0,0.5)] top-[95px]">
            <p className="leading-[normal]">14</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[203px] size-[20px] text-black top-[95px]">
            <p className="leading-[normal]">15</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[223px] size-[20px] text-black top-[95px]">
            <p className="leading-[normal]">16</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[243px] size-[20px] text-black top-[95px]">
            <p className="leading-[normal]">17</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[263px] size-[20px] text-black top-[95px]">
            <p className="leading-[normal]">18</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[283px] size-[20px] text-black top-[95px]">
            <p className="leading-[normal]">19</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[303px] size-[20px] text-[rgba(0,0,0,0.5)] top-[95px]">
            <p className="leading-[normal]">20</p>
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents font-['Pretendard',sans-serif] font-medium leading-[0] left-[173px] not-italic text-[10px] text-center top-[67px]" data-name="Week 2">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[183px] size-[20px] text-[rgba(0,0,0,0.5)] top-[77px]">
            <p className="leading-[normal]">7</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[203px] size-[20px] text-black top-[77px]">
            <p className="leading-[normal]">8</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[223px] size-[20px] text-black top-[77px]">
            <p className="leading-[normal]">9</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[243px] size-[20px] text-black top-[77px]">
            <p className="leading-[normal]">10</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[263px] size-[20px] text-black top-[77px]">
            <p className="leading-[normal]">11</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[283px] size-[20px] text-black top-[77px]">
            <p className="leading-[normal]">12</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[303px] size-[20px] text-[rgba(0,0,0,0.5)] top-[77px]">
            <p className="leading-[normal]">13</p>
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents font-['Pretendard',sans-serif] font-medium leading-[0] left-[193px] not-italic text-[10px] text-center top-[48px]" data-name="Week 1">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[203px] size-[20px] text-black top-[58px]">
            <p className="leading-[normal]">1</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[223px] size-[20px] text-black top-[58px]">
            <p className="leading-[normal]">2</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[243px] size-[20px] text-black top-[58px]">
            <p className="leading-[normal]">3</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[263px] size-[20px] text-black top-[58px]">
            <p className="leading-[normal]">4</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[283px] size-[20px] text-black top-[58px]">
            <p className="leading-[normal]">5</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[303px] size-[20px] text-[rgba(0,0,0,0.5)] top-[58px]">
            <p className="leading-[normal]">6</p>
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents font-['Pretendard',sans-serif] font-medium leading-[0] left-[173px] not-italic text-[9px] text-[rgba(0,0,0,0.5)] text-center top-[30px]" data-name="Week Days">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[183px] size-[20px] top-[40px]">
            <p className="leading-[normal]">S</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[203px] size-[20px] top-[40px]">
            <p className="leading-[normal]">M</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[223px] size-[20px] top-[40px]">
            <p className="leading-[normal]">T</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[243px] size-[20px] top-[40px]">
            <p className="leading-[normal]">W</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[263px] size-[20px] top-[40px]">
            <p className="leading-[normal]">T</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[283px] size-[20px] top-[40px]">
            <p className="leading-[normal]">F</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[303px] size-[20px] top-[40px]">
            <p className="leading-[normal]">S</p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[16px] not-italic text-[#ee5c51] text-[12px] top-[15px] whitespace-nowrap">Monday</p>
      <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-light leading-[normal] left-[13px] not-italic text-[42px] text-black top-[24px] whitespace-nowrap">22</p>
      <div className="absolute contents left-[16px] top-[186px]">
        <div className="absolute contents left-[16px] top-[256px]" data-name="Event 2">
          <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[24px] not-italic text-[12px] text-black top-[276px] whitespace-nowrap">Video call</p>
          <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[24px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[292px] whitespace-nowrap">15:30-16:00</p>
          <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-semibold leading-[normal] left-[24px] not-italic text-[15px] text-black top-[256px] whitespace-nowrap">Product meeting</p>
          <div className="absolute bg-[#71b548] h-[45px] left-[16px] rounded-[1px] top-[258px] w-[2px]" data-name="Line" />
        </div>
        <div className="absolute contents left-[173px] top-[256px]" data-name="Event 3">
          <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[181px] not-italic text-[12px] text-black top-[276px] whitespace-nowrap">Private</p>
          <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[181px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[292px] whitespace-nowrap">15:30-16:00</p>
          <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-semibold leading-[normal] left-[181px] not-italic text-[15px] text-black top-[256px] whitespace-nowrap">Brainstorming</p>
          <div className="absolute bg-[#b54896] h-[45px] left-[173px] rounded-[1px] top-[258px] w-[2px]" data-name="Line" />
        </div>
        <div className="absolute contents left-[173px] top-[186px]" data-name="Event 1">
          <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[181px] not-italic text-[12px] text-black top-[206px] whitespace-nowrap">Video call</p>
          <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[181px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[222px] whitespace-nowrap">12:30-13:00</p>
          <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-semibold leading-[normal] left-[181px] not-italic text-[15px] text-black top-[186px] whitespace-nowrap">Design meeting</p>
          <div className="absolute bg-[#71b548] h-[45px] left-[173px] rounded-[1px] top-[188px] w-[2px]" data-name="Line" />
        </div>
      </div>
      <div className="absolute contents left-[16px] top-[160px]" data-name="Event 1">
        <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[24px] not-italic text-[12px] text-black top-[204px] whitespace-nowrap">Online</p>
        <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[24px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[220px] whitespace-nowrap">10:00-11:30</p>
        <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-semibold leading-[normal] left-[24px] not-italic text-[15px] text-black top-[184px] whitespace-nowrap">Apple Keynote</p>
        <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[normal] left-[16px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[160px] whitespace-nowrap">Today</p>
        <div className="absolute bg-[#b54896] h-[45px] left-[16px] rounded-[1px] top-[186px] w-[2px]" data-name="Line" />
      </div>
    </div>
  );
}