import RdvTabs from "../components/RdvTabs";
import ProfileIcon from "../components/icons/ProfileIcon";

export default function RdvPage() {
  return (
    <div className="min-h-screen bg-[#e6f5ff]">
      <div className="w-full bg-oxylove text-white py-3 pt-10">
        <div className="mx-auto max-w-screen-sm px-4 flex items-center justify-between">
          <span style={{ fontFamily: 'Pacifico, cursive' }} className="text-xl">Mes Rendez-vous</span>
          <span aria-hidden>
            <ProfileIcon size={24} />
          </span>
        </div>
      </div>
      <main className="mx-auto max-w-screen-lg px-4 pt-0 pb-28">
        <RdvTabs />

        {/* CTA fixed above BottomNav on mobile */}
        <div className="md:hidden fixed bottom-20 left-0 right-0 mx-auto max-w-screen-sm px-4">
          <button className="w-full bg-oxylove text-white rounded-xl py-3 shadow-lg font-semibold flex items-center justify-center gap-2">
            <span aria-hidden className="text-white"><svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3098 17.0768L17.3468 12.0802L20.0943 14.8277L15.0572 19.8243C14.9091 19.9859 14.7071 20.0937 14.5185 20.1745L12.1482 20.7536C11.9596 20.794 11.7172 20.7536 11.569 20.6054C11.4074 20.4438 11.3805 20.2149 11.4074 19.9859L11.9865 17.6559C12.0269 17.4674 12.1482 17.2654 12.2963 17.0768M22.128 10.6391C22.7071 11.2182 22.7071 12.1879 22.128 12.8075L20.9697 13.9657L18.2222 11.2182L19.3805 10.06C19.9596 9.48086 20.9697 9.48086 21.5488 10.06L22.128 10.6391ZM3.97307 15.4876C3.97307 14.9893 4.36364 14.5583 4.90236 14.5583H9.23907C9.75085 14.5583 10.1684 14.9893 10.1684 15.4876C10.1684 16.0263 9.73738 16.4169 9.23907 16.4169H4.90236C4.36364 16.4169 3.97307 16.0263 3.97307 15.4876ZM11.7306 10.8277C12.229 10.8277 12.6599 11.2586 12.6599 11.7569C12.6599 12.2957 12.229 12.6862 11.7306 12.6862H4.90236C4.36364 12.6862 3.97307 12.2957 3.97307 11.7569C3.97307 11.2452 4.36364 10.8277 4.90236 10.8277H11.7306ZM5.21212 0.901733C5.71044 0.901733 6.14142 1.33271 6.14142 1.83103V3.37985H11.7306V1.83103C11.7306 1.33271 12.1212 0.901733 12.6599 0.901733C13.1583 0.901733 13.5892 1.33271 13.5892 1.83103V3.37985H15.1381C16.4983 3.37985 17.6162 4.49769 17.6162 5.85796V8.33608H2.10101V18.262C2.10101 18.6122 2.37037 18.8815 2.72054 18.8815H10.3973L10.2088 19.7031C10.128 20.0532 10.128 20.4438 10.2492 20.7536H2.72054C1.31987 20.7536 0.242432 19.6627 0.242432 18.2755V5.87143C0.242432 4.51116 1.33334 3.39331 2.72054 3.39331H4.26936V1.8445C4.26936 1.34618 4.65994 0.915204 5.19866 0.915204" fill="white"/></svg></span>
            Prendre rendez-vous
          </button>
        </div>
      </main>
    </div>
  );
}


