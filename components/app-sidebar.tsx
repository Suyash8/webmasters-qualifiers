import * as React from "react";
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react";
import Img from "@/public/logo.jpg";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      items: [],
    },
    {
      title: "Genres",
      url: "/genres",
      items: [
        {
          title: "Comedy",
          url: "/genres/comedy",
        },
        {
          title: "Horror",
          url: "/genres/horror",
        },
        {
          title: "Drama",
          url: "/genres/drama",
        },
        {
          title: "Crime",
          url: "/genres/crime",
        },
        {
          title: "Action",
          url: "/genres/action",
        },
      ],
    },
    {
      title: "Movies",
      url: "/movies",
      items: [
        {
          title: "Singham",
          url: "Action",
          descrition:
            "A truly honest police officer is transferred to a town controlled by a gangster he has humiliated. The gangster believes he can use good power to bring down this officer who made him look foolish and weak.",
          imdb_rating: "6.8",
          image:
            "https://tse4.mm.bing.net/th?id=OIP.DR1Sw3a0KR8WAibgsZs2eAHaKu&pid=Api&P=0&h=180",
        },
        {
          title: "Race",
          url: "Action",
          descrition:
            "Destiny makes two brothers- Ranvir and Rajiv - enemies of each other. Everything is fair in love and war.",
          imdb_rating: "6.7",
          image:
            "https://tse4.mm.bing.net/th?id=OIP.99LhvKIFlz56sntRk7ctlwHaJ4&pid=Api&P=0&h=180",
        },
        {
          title: "Dhoom",
          url: "Action",
          descrition:
            "Dhoom reinvents the classic cops and robbers tale for the 21st century. Fast bikes, big action, and non-stop fun make for a thrilling story.",
          imdb_rating: "6.6",
          image:
            "https://tse1.mm.bing.net/th?id=OIP.aNmHl96hdXtWfnuHlkjHRAHaJ4&pid=Api&P=0&h=180",
        },
        {
          title: "Wanted",
          url: "Action",
          descrition:
            "Radhe is a ruthless gangster who will kill anyone for money. He is attracted towards Jhanvi, a middle class girl, who does not approve of his work and wants him to change.",
          imdb_rating: "6.6",
          image:
            "https://tse3.mm.bing.net/th?id=OIP.pE6tVOWSx6j6FOAFG0-4LgHaKu&pid=Api&P=0&h=180",
        },
        {
          title: "Krrish",
          url: "Action",
          descrition:
            "Krishna is forced by circumstances to use his superpowers and become the masked superhero Krrish, before getting drawn towards his lost legacy.",
          imdb_rating: "6.6",
          image:
            "https://tse4.mm.bing.net/th?id=OIP.3ea-S2JNuXL2w7JdW9-PNgHaKu&pid=Api&P=0&h=180",
        },
        {
          title: "Andhadhun",
          url: "Crime",
          descrition:
            "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing of.",
          imdb_rating: "8.2",
          image:
            "https://tse3.mm.bing.net/th?id=OIP.kdxXfdBZwngqVltDbX4QNQHaEB&pid=Api&P=0&h=180",
        },
        {
          title: "Drishyam",
          url: "Crime",
          descrition:
            "Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime.",
          imdb_rating: "8.2",
          image:
            "https://tse2.mm.bing.net/th?id=OIP.VcQsXkEFXstks3rA8NaOQgHaEK&pid=Api&P=0&h=180",
        },
        {
          title: "Gangs of Wasseypur",
          url: "Crime",
          descrition:
            "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
          imdb_rating: "8.2",
          image:
            "https://tse1.mm.bing.net/th?id=OIP.mnZA-opdAZX9RGm-ZIBUEQHaJ4&pid=Api&P=0&h=180",
        },
        {
          title: "Special 26",
          url: "Crime",
          descrition:
            "A gang of con-men rob prominent rich businessmen and politicians by posing as C.B.I and income tax officers.",
          imdb_rating: "8.0",
          image:
            "https://tse4.mm.bing.net/th?id=OIP.NjVGpxlM85pzzIrSpP9SpAHaJ4&pid=Api&P=0&h=180",
        },
        {
          title: "Kahaani",
          url: "Crime",
          descrition:
            "A pregnant woman's search for her missing husband takes her from London to Kolkata, but everyone she questions denies having ever met him.",
          imdb_rating: "8.1",
          image:
            "https://tse1.mm.bing.net/th?id=OIP.GgIkJjZ9jmCccIWK6YZsbQHaLZ&pid=Api&P=0&h=180",
        },
        {
          title: "Swades",
          url: "Drama",
          descrition:
            "A successful Indian scientist returns to an Indian village to take his nanny to America with him and in the process rediscovers his roots.",
          imdb_rating: "8.2",
          image:
            "https://tse4.mm.bing.net/th?id=OIP.Tknzg8teqZCom0QBwHytoAHaFj&pid=Api&P=0&h=180",
        },
        {
          title: "Rang De Basanti",
          url: "Drama",
          descrition:
            "The story of six young Indians who assist an English woman to film a documentary on the freedom fighters from their past, and the events that lead them to relive the long-forgotten saga of freedom.",
          imdb_rating: "8.1",
          image:
            "https://tse3.mm.bing.net/th?id=OIP.F3u874A3-bL7c5XaqbKVhQHaKe&pid=Api&P=0&h=180",
        },
        {
          title: "3 Idiots",
          url: "Drama",
          descrition:
            "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them idiots.",
          imdb_rating: "8.4",
          image:
            "https://tse3.mm.bing.net/th?id=OIP.lYV8OrLMUDNxthXdhHxzawHaJs&pid=Api&P=0&h=180",
        },
        {
          title: " A Wednesday",
          url: "Drama",
          descrition:
            "A retiring police officer reminisces about the most astounding day of his career. About a case that was never filed but continues to haunt him in his memories - the case of a man and a Wednesday.",
          imdb_rating: "8.1",
          image:
            "https://tse4.mm.bing.net/th?id=OIP.eIK5Cee_UsgUHFHq2iLYywAAAA&pid=Api&P=0&h=180",
        },
        {
          title: " Dangal",
          url: "Drama",
          descrition:
            "Mahavir Singh Phogat, a former wrestler, decides to fulfill his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas",
          imdb_rating: "8.3",
          image:
            "https://tse1.mm.bing.net/th?id=OIP.IAfqObNv6Zn8BRhvlAXmvgHaJ4&pid=Api&P=0&h=180",
        },
        {
          title: " 13B: Fear Has a New Address",
          url: "Horror",
          descrition:
            "A man experiences a supernatural occurrence at his newly purchased apartment; a soap opera being telecast exclusively on his TV, which shows the future of his family.",
          imdb_rating: "7.4",
          image:
            "https://tse3.mm.bing.net/th?id=OIP.BCOMs-_wk0qwFGah5vNrUgHaKs&pid=Api&P=0&h=180",
        },
        {
          title: "Pari",
          url: "Horror",
          descrition:
            "Arnab tries to help Ruksahana, who is found under mysterious circumstances in a house. He lets her stay at his home until he discovers something strange about her.",
          imdb_rating: "6.6",
          image:
            "https://tse2.mm.bing.net/th?id=OIP.cZdGFsVR5WfyVinIlZ6MFAHaFL&pid=Api&P=0&h=180",
        },
        {
          title: "1920",
          url: "Horror",
          descrition:
            "After forsaking his family and religion, a husband finds his wife is demoniacally possessed",
          imdb_rating: "6.4",
          image:
            "https://tse4.mm.bing.net/th?id=OIP.RdMF-yi06TqTfv-w7f_QbAHaDi&pid=Api&P=0&h=180",
        },
        {
          title: "Haunted - 3D",
          url: "Horror",
          descrition:
            "Disregarding tales that Glen Manor is haunted, Rehan travels to Koti, Shimla, to prepare the house for sale. Realizing the stories are true, he is taken back to year 1936, hoping to rewrite history.",
          imdb_rating: "6.3",
          image:
            "https://tse4.mm.bing.net/th?id=OIP.gUCab5FlmAUjSxol5cynugHaHa&pid=Api&P=0&h=180",
        },
        {
          title: "Darna Mana Hai",
          url: "Horror",
          descrition:
            "After their car breaks down in the middle of the night, seven friends find shelter and tell one another stories to kill time till dawn.",
          imdb_rating: "6.3",
          image:
            "https://tse1.mm.bing.net/th?id=OIP.cQoFX6HvfngshWLT5aY03gHaK-&pid=Api&P=0&h=180",
        },
        {
          title: "Hera Pheri",
          url: "Comedy",
          descrition:
            "Two tenants and a landlord look for answers to all their money problems - but when their opportunity arrives, will they know what to do with it?",
          imdb_rating: "8.2",
          image:
            "https://tse2.mm.bing.net/th?id=OIP.Mm0p6KTfGkrvkbMwbWT_ewHaLH&pid=Api&P=0&h=180",
        },
        {
          title: " Munna Bhai M.B.B.S.",
          url: "Comedy",
          descrition:
            "A gangster sets out to fulfill his father's dream of becoming a doctor",
          imdb_rating: "8.1",
          image:
            "https://tse2.mm.bing.net/th?id=OIP.6RY2gTu7gYnqiQVdkQAI0QHaEK&pid=Api&P=0&h=180",
        },
        {
          title: "Garam Masala",
          url: "Comedy",
          descrition:
            "A rib tickling tale of two flirts who constantly flirt with women despite one of them being engaged. Chaos ensues when the fiancé finds out that her to-be groom is cheating on her.",
          imdb_rating: "6.8",
          image:
            "https://tse1.mm.bing.net/th?id=OIP.K01UGNzTAaGxV52gEnSfhAHaKX&pid=Api&P=0&h=180",
        },
        {
          title: "Dhamaal",
          url: "Comedy",
          descrition:
            "Four lazy slacker conmen buddies learn about the secret of a hidden treasure from a dying thief and set out to find and claim it while being pursued by a determined police inspector who is hellbent to get the treasure all by himself.",
          imdb_rating: "7.5",
          image:
            "https://media2.bollywoodhungama.in/wp-content/uploads/2016/03/Dhamaal.jpg",
        },
        {
          title: "Golmaal: Fun Unlimited",
          url: "Comedy",
          descrition:
            "Four runaway crooks take shelter in a bungalow which is owned by a blind couple.",
          imdb_rating: "7.5",
          image:
            "https://in.images.search.yahoo.com/images/view;_ylt=Awrx.PaQaaxn_HUGHZm9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzcwZTcyNGU4MjgwZDllNmVmN2E3YzQ3ZDlmZGE2NjliBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dgolmaal%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=1200&h=1600&imgurl=images-na.ssl-images-amazon.com%2Fimages%2FS%2Fpv-target-images%2Fe197a04380694722e110d7b1d89feb6543dec33530054e825c35d219fd92af1e._RI_V_TTW_.jpg&rurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FGolmaal-Fun-Unlimited%2F0O2SYVQ2FR0SFS8E1W1CEJDQ4T&size=420KB&p=golmaal&oid=70e724e8280d9e6ef7a7c47d9fda669b&fr2=piv-web&fr=mcafee&tt=Prime+Video%3A+Golmaal+Fun+Unlimited&b=0&ni=21&no=1&ts=&tab=organic&sigr=wabMb6FrNPR6&sigb=XiaB6yGtHJKT&sigi=ns9Ffd8C.h1o&sigt=EXJNSj1Wswaz&.crumb=Tnp2bjlsoBZ&fr=mcafee&fr2=piv-web&type=E210IN885G0",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {/* <GalleryVerticalEnd className="size-4" /> */}
                  <Image src={Img} alt="logo" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">BollyMasala</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              // isActive={item.isActive}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
