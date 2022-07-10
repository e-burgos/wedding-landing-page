import portada from "../assets/images/pictures/bg.jpeg";
import portadaM from "../assets/images/pictures/bgM.jpeg";
import iconLineal from "../assets/images/pictures/img_linea01.svg";
import weddingGig from "../assets/images/pictures/weddingGig.gif";

const bg = new Image();
bg.src = portada;
const bgM = new Image();
bgM.src = portadaM;
const gif = new Image();
gif.src = weddingGig;

export const picturesSection = {
  bg: {
    bg: bg.src,
    bgM: bgM.src,
  },
  img: {
    lineal: iconLineal,
    gif: gif.src,
  },
  photos: [
    {
      id: 1,
      img: bg.src,
    },
    {
      id: 2,
      img: bg.src,
    },
  ],
};

export interface InstagramData {
  data: [
    {
      id: string;
      name: string;
      key: string;
    },
    {
      source: {
        id: string;
        name: string;
        network: string;
      };
      id: string;
      created_at: string;
      link: string;
      image_url: string;
      video_url: boolean;
      title: null;
      description: string;
      author_name: string;
      author_username: string;
      author_picture: string;
      cta: null;
    }[]
  ];
  error: boolean;
  loading: boolean;
}

export const instagram: InstagramData = {
  data: [
    {
      id: "4918",
      name: "ximeytucu",
      key: "stipe",
    },
    [
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233918",
        created_at: "1640710349",
        link: "https://www.instagram.com/p/CYCK4QRO1Aa/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F270051650_942974176604384_2295151817866631654_n.jpg%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeFw6YTU5AYZNXorT_YxnN5Gp60AGa_r5OmnrQAZr-vk6UfMwI51evCXfXg8stcxFho%26_nc_ohc%3D5c7OfJkigPYAX9o87c3%26_nc_oc%3DAQkMh4QhmDJ9vrFHnJ22aPZlUdvZmvZwfX13VdcfUohyhSxYMdHNivvFE4OFN_mtYrQ%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT-8wWLF4FU_gOAuyw0TWfo4XfLKmdjdqwulQblZVPll3g%26oe%3D62CF4552?ci_url_encoded=1",
        video_url: false,
        title: null,
        description: "#ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233927",
        created_at: "1636023578",
        link: "https://www.instagram.com/p/CV2fkrILf7S/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F252030291_213518734255857_4745216504422421941_n.jpg%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeGZo3jSXoUc6g-bYhDStQDz9nWxwrbMEcH2dbHCtswRwUR2_9QK2SJUfqJAy0lfiVw%26_nc_ohc%3DM0Su1kqn46gAX8VuMm5%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT-o_m0DTXyin6p4EUGc5-ty_5TKyzFy9pOTPr480Dqu2w%26oe%3D62CED010?ci_url_encoded=1",
        video_url: false,
        title: null,
        description:
          "Después de tantos momentos que vivimos juntos, buenos y malos, después de conocer casi todos tus defectos y vos aceptar los míos, después de reflexionar varios días en seguir creciendo con vos, llegue a la conclusión que sin duda el próximo paso era comprometerme a elegirte cada día que siga viviendo. Te amo mi vida, gracias por el SÍ! #ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233928",
        created_at: "1636023578",
        link: "https://www.instagram.com/p/CV2fkrKLToD/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F252404253_421493662755969_6018685001740308888_n.jpg%3F_nc_cat%3D110%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeEJGhMvA-Vyb_oSSuI1Ru5glg-Nvc093u2WD429zT3e7bYWfzDz28CmLQB_BAAc7w4%26_nc_ohc%3DXDD7Xq9wDd8AX_Gr4bH%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT98Lz0GetYelPkfpSIsUX4xVZmUZjiDiWo_Cb7MuBOWkA%26oe%3D62CEEA07?ci_url_encoded=1",
        video_url: false,
        title: null,
        description:
          "Después de tantos momentos que vivimos juntos, buenos y malos, después de conocer casi todos tus defectos y vos aceptar los míos, después de reflexionar varios días en seguir creciendo con vos, llegue a la conclusión que sin duda el próximo paso era comprometerme a elegirte cada día que siga viviendo. Te amo mi vida, gracias por el SÍ! #ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233929",
        created_at: "1636023578",
        link: "https://www.instagram.com/p/CV2fkrKr_2u/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F252524524_312274703729559_4655968840622696305_n.jpg%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeFnlsb-vtQd87vQHL0QHGndtCC-ZEMOGTe0IL5kQw4ZNweMImDON4aPxzXv-9qBFHc%26_nc_ohc%3Dkn1FG7s8n4AAX9waGjN%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT-zfdYXM_JoawjqAkErarcOSyzhwspYfCZ6Ru-9HBjrIA%26oe%3D62CDBADB?ci_url_encoded=1",
        video_url: false,
        title: null,
        description:
          "Después de tantos momentos que vivimos juntos, buenos y malos, después de conocer casi todos tus defectos y vos aceptar los míos, después de reflexionar varios días en seguir creciendo con vos, llegue a la conclusión que sin duda el próximo paso era comprometerme a elegirte cada día que siga viviendo. Te amo mi vida, gracias por el SÍ! #ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233930",
        created_at: "1636023578",
        link: "https://www.instagram.com/p/CV2fkrJrVvX/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F252995652_153663950270206_2554239467503383206_n.jpg%3F_nc_cat%3D101%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeEAuloSAiVk2fPsdcXZu0v0J-rGBGfA9BQn6sYEZ8D0FKf_t-n0dJHn-eJEYuuyoRo%26_nc_ohc%3DUJ5ZBzvU6HUAX8xHT2n%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT_7DJOE1sELpRUFIVZ4TdzxtQtGONJbYDUxbnv4APGUCQ%26oe%3D62CE89C4?ci_url_encoded=1",
        video_url: false,
        title: null,
        description:
          "Después de tantos momentos que vivimos juntos, buenos y malos, después de conocer casi todos tus defectos y vos aceptar los míos, después de reflexionar varios días en seguir creciendo con vos, llegue a la conclusión que sin duda el próximo paso era comprometerme a elegirte cada día que siga viviendo. Te amo mi vida, gracias por el SÍ! #ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233931",
        created_at: "1636023578",
        link: "https://www.instagram.com/p/CV2fkrZrdCL/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F253213244_576780953381572_7614677107000510384_n.jpg%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeFpkus0dyGPihBB12puw6z4Hv2kyhZI9wAe_aTKFkj3ALlrhla_DC6pEn4PyckI9po%26_nc_ohc%3DBaNV6T6fUMMAX-PA9v2%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT-wdFY2wH9V6DjdNVcrn_z84ToxE-NzH6bzGCNLmYyoPg%26oe%3D62CECAB4?ci_url_encoded=1",
        video_url: false,
        title: null,
        description:
          "Después de tantos momentos que vivimos juntos, buenos y malos, después de conocer casi todos tus defectos y vos aceptar los míos, después de reflexionar varios días en seguir creciendo con vos, llegue a la conclusión que sin duda el próximo paso era comprometerme a elegirte cada día que siga viviendo. Te amo mi vida, gracias por el SÍ! #ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233932",
        created_at: "1636023578",
        link: "https://www.instagram.com/p/CV2fkrLLrCp/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F253054657_211200494420998_8691953862835746224_n.jpg%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeHv4XjxGViqjKYv7aQ31XRauqxiOl5-KKq6rGI6Xn4oqrNUO4Wj1Pn42Zi_nwRNQVA%26_nc_ohc%3DLzUS_6wrA18AX_xgtd6%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT9Eh-kHoBUlqOwVC2AtBlO1FeXV98Q4v6si2Vh30eVORQ%26oe%3D62CF9AE7?ci_url_encoded=1",
        video_url: false,
        title: null,
        description:
          "Después de tantos momentos que vivimos juntos, buenos y malos, después de conocer casi todos tus defectos y vos aceptar los míos, después de reflexionar varios días en seguir creciendo con vos, llegue a la conclusión que sin duda el próximo paso era comprometerme a elegirte cada día que siga viviendo. Te amo mi vida, gracias por el SÍ! #ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233912",
        created_at: "1634516314",
        link: "https://www.instagram.com/p/CVJksm3L126/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F246225760_917181932219640_8437588302433187160_n.jpg%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeFT1r1KIDGjFIf2DH1j9JPViB0TAJ5_SfuIHRMAnn9J-1FyaReNJYm6nq0RGa2D3k8%26_nc_ohc%3DMq6dnxnMfL8AX9LUsLO%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT_DzCT_oqluOUYypS7hSSXxp6ijIFvhBWkq8DAknHTM8w%26oe%3D62CDF9EB?ci_url_encoded=1",
        video_url: false,
        title: null,
        description: "#ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233913",
        created_at: "1628379599",
        link: "https://www.instagram.com/p/CSSr1yeLXik/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F233679938_556172995517512_7577648621092818190_n.jpg%3F_nc_cat%3D110%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeFo4MC8stElAtSnVwD1dwcymTId32A5LJSZMh3fYDkslMuW31ZFwQgcUwko-v-iFfY%26_nc_ohc%3D8BwG8wxv9iYAX-mU61K%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT_lVGY5Bv5ZNo2isw3v_7dDpBjJTSVTThYjb_7NiK23eg%26oe%3D62CF0476?ci_url_encoded=1",
        video_url: false,
        title: null,
        description: "#ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233911",
        created_at: "1619744206",
        link: "https://www.instagram.com/p/CORVIrTJt-S/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F180023835_117760620421620_4051467892193933026_n.jpg%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeFYvF26Dao1P--5BH4Lgck9CIFn3GuvC3kIgWfca68LeTv9WHNp8l48j8ePNle0jrs%26_nc_ohc%3DdHUZnbX2sc4AX_6B7Na%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT_fTe_7Ba7V9zvR7L30hk7VKRj1up0Cqq8Q1qWc5wAGTw%26oe%3D62CF9D6C?ci_url_encoded=1",
        video_url: false,
        title: null,
        description:
          "Feliz cumple mi amor! Y por muchos más a tu lado...#ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233914",
        created_at: "1613669915",
        link: "https://www.instagram.com/p/CLcTWDUpB32/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F151807015_1354996868170891_3533421317097002912_n.jpg%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeEdx3YRX8wgNPoCvn30jZyGPbKPfMLi_eA9so98wuL94LAPo46LkcmsVHkrmPqvRyA%26_nc_ohc%3Dhkb4ajOeuC4AX-GUbbt%26_nc_oc%3DAQlVL8WCMmV-KSfLoo-byEnRkjcKX3vqXmC6QyxUDGFMiWAL-gNZiqLe8rl5H0Zl5UY%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT_xmmYc-aSxi7RnVBy-NQtlmNoHbNEywnUyHyumWz_ciw%26oe%3D62CE1C21?ci_url_encoded=1",
        video_url: false,
        title: null,
        description: "You and me #ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233916",
        created_at: "1598200199",
        link: "https://www.instagram.com/p/CEPRNEjpbht/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F118071128_2598490243586743_3395315671333095511_n.jpg%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeH29NbwptNEc0o9OC6IYg0fUTEvy3Rx9QxRMS_LdHH1DMfmTP18AqjYqy4k32FlyHA%26_nc_ohc%3DYOQXREQzpqgAX9lR_O4%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT9sxhl4IJVVQhW7CuW41fjdppy0IbteigWOuY4tvz_S_Q%26oe%3D62CF1A6B?ci_url_encoded=1",
        video_url: false,
        title: null,
        description: "#ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233915",
        created_at: "1597635888",
        link: "https://www.instagram.com/p/CD-c3eyjl1r/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F118075310_242267210166169_7580192743359319045_n.jpg%3F_nc_cat%3D111%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeEAcEuozPTZZFMcrdNhCuZcaT2VuzmvxSJpPZW7Oa_FIsXIsBQdPjmf9vXw6RsufM8%26_nc_ohc%3Dhk9UvHLmqJ4AX8k7wEm%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT9-uIqRcVr6SOqYEbQHcXIP6ocAEOqlfP3dgkrw9TntFQ%26oe%3D62CF13B8?ci_url_encoded=1",
        video_url: false,
        title: null,
        description: "#ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
      {
        source: {
          id: "7927",
          name: "ximeytucu",
          network: "Instagram",
        },
        id: "1233917",
        created_at: "1596231886",
        link: "https://www.instagram.com/p/CDUm8cvJ6It/",
        image_url:
          "https://acfdsgtmhq.cloudimg.io/v7/https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F116870892_164169955329249_8866543551907124038_n.jpg%3F_nc_cat%3D110%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_eui2%3DAeH1tAPzdW3EmQFrgY46CRxixQcMB11-eVTFBwwHXX55VNSnfrBb15lXdjW0OymFcoE%26_nc_ohc%3DSFdatn3Mi-IAX9iKWbD%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26edm%3DAPCawUEEAAAA%26oh%3D00_AT8gQjqxIH27GBwWmRTj9uM4zRK50jQ9Ps3fFwN4SXQ6BA%26oe%3D62CEE556?ci_url_encoded=1",
        video_url: false,
        title: null,
        description: "Matando el día #ximeytucu",
        author_name: "Instagram User",
        author_username: "InstagramUser",
        author_picture: "img/author.png",
        cta: null,
      },
    ],
  ],
  error: false,
  loading: false,
};

export interface FormatPost {
  id: string;
  description: string;
  link: string;
  image: string;
}

export const formatInitialData: FormatPost[] = [
  {
    id: "2562922618175283090",
    description:
      "Feliz cumple mi amor! Y por muchos más a tu lado...#ximeytucu",
    link: "https://www.instagram.com/p/CORVIrTJt-S/",
    image:
      "https://instagram.fhyd12-1.fna.fbcdn.net/v/t51.2885-15/118071128_2598490243586743_3395315671333095511_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fhyd12-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=iY4DqFKt_wMAX_qlj7S&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AT9QPhbTYZlw6SaKe7SvpWksHmgS8bAiJsvJU8u6dRlOdg&oe=62D2934A&_nc_sid=d997c6",
  },
  {
    id: "2686840047762628026",
    description: "#ximeytucu",
    link: "https://www.instagram.com/p/CVJksm3L126/",
    image:
      "https://instagram.fhyd12-1.fna.fbcdn.net/v/t51.2885-15/246225760_917181932219640_8437588302433187160_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fhyd12-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=YzeLIvP_QjIAX9hTakx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AT-07cHDTip5IZIn_huEKUd7Crikn68vwPN1svEiFjYWkw&oe=62D227ED&_nc_sid=d997c6",
  },
  {
    id: "2699483891951795532",
    description:
      "Después de tantos momentos que vivimos juntos, buenos y malos, después de conocer casi todos tus defectos y vos aceptar los míos, después de reflexionar varios días en seguir creciendo con vos, llegue a la conclusión que sin duda el próximo paso era comprometerme a elegirte cada día que siga viviendo. Te amo mi vida, gracias por el SÍ! #ximeytucu",
    link: "https://www.instagram.com/p/CV2fkwYrP1M/",
    image:
      "https://instagram.fhyd12-1.fna.fbcdn.net/v/t51.2885-15/252030291_213518734255857_4745216504422421941_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fhyd12-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=VFE6F-oB3QoAX-quMok&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AT88HhrYZGtWgszznJEk-jrkw3M0UICpeWRytCK_1PLpHg&oe=62D17F8A&_nc_sid=d997c6",
  },
];

export interface IPosts {
  node: {
    edge_liked_by: {
      count: number;
    };
    accessibility_caption: null;
    display_url: string;
    shortcode: string;
    dimensions: {
      width: number;
      height: number;
    };
    taken_at_timestamp: number;
    id: string;
    thumbnail_src: string;
    owner: { id: string };
    edge_media_to_caption: {
      edges: {
        node: {
          text: string;
        };
      }[];
    };
    edge_media_preview_like: {
      count: number;
    };
    is_video: false;
    thumbnail_resources: {
      config_width: number;
      config_height: number;
      src: string;
    }[];
    edge_media_to_comment: {
      count: number;
    };
  };
}
