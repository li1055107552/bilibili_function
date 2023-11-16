class mp4 {
    static video_codecid = {
        "7": {
            desc: "AVC 编码",
            remark: "8K 视频不支持该格式"
        },
        "12": {
            desc: "HEVC 编码",
            remark: ""
        },
        "13": {
            desc: "AV1 编码",
            remark: ""
        }
    }
    constructor() {
        this.accept_quality = [
            64,
            16
        ]
        this.accept_description = [
            "高清 720P",
            "流畅 360P"
        ]
        this.support_formats = [
            {
                "quality": 64,
                "format": "mp4720",
                "new_description": "720P 高清",
                "display_desc": "720P",
                "superscript": "",
                "codecs": null
            },
            {
                "quality": 16,
                "format": "mp4",
                "new_description": "360P 流畅",
                "display_desc": "360P",
                "superscript": "",
                "codecs": null
            }
        ]
        this.accept_format = "mp4720,mp4"
        this.data = [
            {
                "quality": 16,
                "format": "mp4",
                "timelength": 151766,
                "video_codecid": 7,
                "durl": [
                    {
                        "length": 151766,
                        "size": 8247873,
                        "url": "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1699992664&gen=playurlv2&os=08cbv&oi=2028369274&trid=f4d992e139ce434daeb424993670fec2T&mid=279753317&platform=html5&upsig=1c0eb0b0106f6dc5ac21832e03adbaa4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&bw=54621&orderid=0,1&buvid=&build=0&mobi_app=&f=T_0_0&logo=80000000",
                        "backup_url": null
                    }
                ]
            },
            {
                "quality": 64,
                "format": "mp4720",
                "timelength": 151673,
                "video_codecid": 7,
                "durl": [
                    {
                        "length": 151673,
                        "size": 28749784,
                        "url": "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-192.mp4?e=ig8euxZM2rNcNbR3nWdVhwdlhW4HhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1699992275&gen=playurlv2&os=alibv&oi=2028369274&trid=084ebc81a1b040b8a7930b0b3c43e90fT&mid=279753317&platform=html5&upsig=7820502f5a3657ad083599e3656bb2e4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&bw=190395&orderid=0,1&buvid=&build=0&mobi_app=&f=T_0_0&logo=80000000",
                        "backup_url": null
                    }
                ]
            }
        ]
    }

}

class audio {
    constructor(data){

    }
}

class video {
    constructor(data){
        
    }
}

let dashData = {

    "dash": {
        
        "video": [
            {
                "id": 116,
                "baseUrl": "https://xy49x70x0x126xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100144.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=183842&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=1de575&traceid=trZslHjSXIcPAe_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=c7ca70efb03db33211f23c15d92d08fe",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100144.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=c7ca70efb03db33211f23c15d92d08fe&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=183842&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100144.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=352168e0c2016745a6a3ca92a3bd84aa&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=183842&logo=40000000"
                ],
                "bandwidth": 1464919,
                "mimeType": "video/mp4",
                "codecs": "hev1.1.6.L150.90",
                "frameRate": "58.824",
                "codecid": 12
            },
            {
                "id": 116,
                "baseUrl": "https://xy42x80x41x219xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-30116.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=563045&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=1414cc&traceid=trZeEtmVzFVzfN_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=9e8ead538b4a9e78a2aaaab4a0924d72",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=9e8ead538b4a9e78a2aaaab4a0924d72&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=563045&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-30116.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=404a65232347c2f472e3169b3280ab28&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=563045&logo=40000000"
                ],
                "bandwidth": 4486568,
                "mimeType": "video/mp4",
                "codecs": "avc1.640033",
                "frameRate": "62.500",
                "codecid": 7
            },
            {
                "id": 116,
                "baseUrl": "https://xy115x218x142x226xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100028.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=198716&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=ffe0c8&traceid=trGBGIcnkpUiha_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=46807776f5dc1a572e5df77cac37bf48",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100028.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=46807776f5dc1a572e5df77cac37bf48&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=198716&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100028.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=8bd6e76e823b3672157899de061c9f44&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=198716&logo=40000000"
                ],
                "bandwidth": 1579129,
                "mimeType": "video/mp4",
                "codecs": "av01.0.09M.08.0.110.01.01.01.0",
                "frameRate": "60.150",
                "codecid": 13
            },
            {
                "id": 80,
                "baseUrl": "https://xy111x227x70x181xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100113.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=100938&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=978708&traceid=trwXqNCfuocVaz_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=c80da98630991fce4ed54e51a714d686",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100113.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=c80da98630991fce4ed54e51a714d686&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=100938&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100113.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=5066fc50ac969599baee5f251142c6a0&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=100938&logo=40000000"
                ],
                "bandwidth": 804135,
                "mimeType": "video/mp4",
                "codecs": "hev1.1.6.L150.90",
                "frameRate": "30.303",
                "codecid": 12
            },
            {
                "id": 80,
                "baseUrl": "https://xy119x60x114x56xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100050.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=196955&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=35aa08&traceid=trVUkaoaTIzcZV_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=499b4cecc4fcd222cb70de44e7b93fb3",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100050.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=499b4cecc4fcd222cb70de44e7b93fb3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=196955&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100050.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=9f37ab77e6a8fc4d967237229891cb1c&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=196955&logo=40000000"
                ],
                "bandwidth": 1569421,
                "mimeType": "video/mp4",
                "codecs": "avc1.640032",
                "frameRate": "30.303",
                "codecid": 7
            },
            {
                "id": 80,
                "baseUrl": "https://xy221x7x239x180xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100026.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=125396&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=561491&traceid=trTUhBkPSDCymv_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=1b48a4be18ea477c9edc992df862d466",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100026.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=1b48a4be18ea477c9edc992df862d466&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=125396&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100026.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=b3209f536950bc5fd644bb3a27d13a44&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=125396&logo=40000000"
                ],
                "bandwidth": 996896,        // 所需最低带宽
                "mimeType": "video/mp4",
                "codecs": "av01.0.08M.08.0.110.01.01.01.0",     // 编码/音频类型
                "frameRate": "30.019",      // 视频帧率
                "codecid": 13
            },
            {
                "id": 64,
                "baseUrl": "https://xy27x44x106x168xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100111.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=53587&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=5dcc17&traceid=trhkyicwQXtRHp_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=04b270c24a1505fda6c21b293dbf3cff",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100111.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=04b270c24a1505fda6c21b293dbf3cff&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=53587&logo=A0000001",
                    "https://upos-sz-mirrorcoso1.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100111.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=coso1bv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=b69476f828e4936681ebf78e2b1e641d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=53587&logo=40000000"
                ],
                "bandwidth": 426907,
                "mimeType": "video/mp4",
                "codecs": "hev1.1.6.L120.90",
                "frameRate": "30.303",
                "codecid": 12
            },
            {
                "id": 64,
                "baseUrl": "https://xy124x89x77x235xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100048.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=117042&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=4bf8d5&traceid=trwvMEDgrWnkYr_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=ea0e702b1de04f6dd0bce46a27deae2d",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100048.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=ea0e702b1de04f6dd0bce46a27deae2d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=117042&logo=A0000001",
                    "https://upos-sz-mirrorcoso1.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100048.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=coso1bv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=3cf44e2c8feb15ce3c44afc0cecdace0&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=117042&logo=40000000"
                ],
                "bandwidth": 932636,
                "mimeType": "video/mp4",
                "codecs": "avc1.640028",
                "frameRate": "30.303",
                "codecid": 7
            },
            {
                "id": 64,
                "baseUrl": "https://xy112x26x159x4xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100024.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=62099&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=12b758&traceid=trThbUijlGqTDd_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=d9bbbdbdda93e173799cd7bcafdcf4b6",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100024.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=d9bbbdbdda93e173799cd7bcafdcf4b6&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=62099&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100024.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=ce873d59df0919d8f396807acfbf4480&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=62099&logo=40000000"
                ],
                "bandwidth": 492599,
                "mimeType": "video/mp4",
                "codecs": "av01.0.08M.08.0.110.01.01.01.0",
                "frameRate": "30.019",
                "codecid": 13
            },
            {
                "id": 32,
                "baseUrl": "https://xy124x67x103x146xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100110.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=34694&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=b91fdb&traceid=trrUvglDxDzqMu_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=0d8bada03fcaa2330300c3b99f6d7ab6",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100110.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=0d8bada03fcaa2330300c3b99f6d7ab6&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=34694&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100110.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=9b9d08e231ef68a2d9bc2454f0d109d1&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=34694&logo=40000000"
                ],
                "bandwidth": 276401,
                "mimeType": "video/mp4",
                "codecs": "hev1.1.6.L120.90",
                "frameRate": "30.303",
                "codecid": 12
            },
            {
                "id": 32,
                "baseUrl": "https://xy118x184x254x100xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100047.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=64727&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=42b840&traceid=trkPfgvfqhULbk_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=e987afc5e5b41bb5737155c864c450b4",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100047.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=e987afc5e5b41bb5737155c864c450b4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=64727&logo=A0000001",
                    "https://upos-sz-mirror08h.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100047.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=08hbv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=d5ca93aa056489b050a0c78a23f419b5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=64727&logo=40000000"
                ],
                "bandwidth": 515776,
                "mimeType": "video/mp4",
                "codecs": "avc1.64001F",
                "frameRate": "30.303",
                "codecid": 7
            },
            {
                "id": 32,
                "baseUrl": "https://xy27x47x70x240xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100023.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=39055&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=3b417c&traceid=trwXkpXUHavXAi_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=3acc702539fec3023ccd77b6502eb8ce",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100023.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=3acc702539fec3023ccd77b6502eb8ce&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=39055&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100023.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=68571b122904e6bfb1931eb98f88df01&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=39055&logo=40000000"
                ],
                "bandwidth": 309005,
                "mimeType": "video/mp4",
                "codecs": "av01.0.08M.08.0.110.01.01.01.0",
                "frameRate": "30.019",
                "codecid": 13
            },
            {
                "id": 16,
                "baseUrl": "https://xy163x142x95x153xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100109.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=24485&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=a83d17&traceid=trAUFEaALcbGUP_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=0a56cdabfbdf8809bbbf735f1720d7a9",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100109.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=0a56cdabfbdf8809bbbf735f1720d7a9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=24485&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100109.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=efe87defa9a164b2a3ecdee280a396f9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=24485&logo=40000000"
                ],
                "bandwidth": 195063,
                "mimeType": "video/mp4",
                "codecs": "hev1.1.6.L120.90",
                "frameRate": "30.303",
                "codecid": 12
            },
            {
                "id": 16,
                "baseUrl": "https://xy150x255x59x192xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100046.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=36191&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=851dda&traceid=truKzqPRTqoJAY_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=046ce51d52b5917f62e2edce890e9981",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100046.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=046ce51d52b5917f62e2edce890e9981&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=36191&logo=A0000001",
                    "https://upos-sz-mirror08h.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100046.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=08hbv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=04aa0a96d0b89acc65a5ba558ec2bf74&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=36191&logo=40000000"
                ],
                "bandwidth": 288388,
                "mimeType": "video/mp4",
                "codecs": "avc1.64001E",
                "frameRate": "30.303",
                "codecid": 7
            },
            {
                "id": 16,
                "baseUrl": "https://xy117x94x117x4xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-100022.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=26429&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=fe1bad&traceid=trhJMbfQUMevyf_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=c14006b0a30583583c1959c2bba1c1bc",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-100022.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=c14006b0a30583583c1959c2bba1c1bc&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=26429&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-100022.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=2ac5c440766f1b9410da1bee75f9b44f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=26429&logo=40000000"
                ],
                "bandwidth": 208410,
                "mimeType": "video/mp4",
                "codecs": "av01.0.08M.08.0.110.01.01.01.0",
                "frameRate": "30.019",
                "codecid": 13
            }
        ],
        "audio": [
            {
                "id": 30280,
                "baseUrl": "https://xy182x117x193x38xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-30280.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=30132&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=ba53b8&traceid=trSWRmGJqxJyoR_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=e78632f328f0b1e6293bb6f1ac7babf8",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=e78632f328f0b1e6293bb6f1ac7babf8&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=30132&logo=A0000001",
                    "https://upos-sz-mirror08h.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=08hbv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=db37e36397e73bc6596a544f98bbedf5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=30132&logo=40000000"
                ],
                "bandwidth": 239992,
                "mimeType": "audio/mp4",
                "codecs": "mp4a.40.2",
            },
            {
                "id": 30216,
                "baseUrl": "https://xy219x155x223x234xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-30216.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=7002&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=21206e&traceid=trqsWexZBGBjMq_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=c76eee3e133eaa18f0ef1069e0b87644",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=c76eee3e133eaa18f0ef1069e0b87644&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=7002&logo=A0000001",
                    "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=alibv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=60a70ecda01c9e6a53ce0d59c68e99cc&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=7002&logo=40000000"
                ],
                "bandwidth": 55736,
                "mimeType": "audio/mp4",
                "codecs": "mp4a.40.5",
            },
            {
                "id": 30232,
                "baseUrl": "https://xy223x166x25x138xy.mcdn.bilivideo.cn:8082/v1/resource/1327694223-1-30232.m4s?agrr=0&build=0&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&bvc=vod&bw=16729&deadline=1699808461&e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M%3D&f=u_0_0&gen=playurlv2&logo=A0000001&mcdnid=1003333&mid=279753317&nbs=1&nettype=0&oi=2028369274&orderid=0%2C3&os=mcdn&platform=pc&sign=804d88&traceid=trtAbOpAvJuLwJ_0_e_N&uipk=5&uparams=e%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform&upsig=bab87949ab90aeaec430a0c56a56d4eb",
                "backupUrl": [
                    "https://xy39x185x249x82xy.mcdn.bilivideo.cn:4483/upgcxcode/23/42/1327694223/1327694223-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=mcdn&oi=2028369274&trid=00004859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=bab87949ab90aeaec430a0c56a56d4eb&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=1003333&bvc=vod&nettype=0&orderid=0,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=16729&logo=A0000001",
                    "https://upos-sz-mirror08h.bilivideo.com/upgcxcode/23/42/1327694223/1327694223-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1699808461&gen=playurlv2&os=08hbv&oi=2028369274&trid=4859d7e366f9460ba7f8cd795ae49bf1u&mid=279753317&platform=pc&upsig=722ad912392492a09b4072c86e575f24&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=1,3&buvid=8B51361B-41C7-896E-22EC-8F84B6A521E155177infoc&build=0&f=u_0_0&agrr=0&bw=16729&logo=40000000"
                ],
                "bandwidth": 133243,
                "mimeType": "audio/mp4",
                "codecs": "mp4a.40.2",
            }
        ],
    },
}

class dash {

    constructor(data) {
        this.timelength = 151765
        this.accept_format = "flv_p60,flv,flv720,flv480,flv360"
        this.accept_description = [
            "高清 1080P60",
            "高清 1080P",
            "高清 720P",
            "清晰 480P",
            "流畅 360P"
        ]
        this.accept_quality = [
            116,
            80,
            64,
            32,
            16
        ]
        this.support_formats = [
            {
                "quality": 116,
                "format": "flv_p60",
                "new_description": "1080P 60帧",
                "display_desc": "1080P",
                "superscript": "60帧",
                "codecs": [
                    "av01.0.09M.08.0.110.01.01.01.0",
                    "avc1.640033",
                    "hev1.1.6.L150.90"
                ]
            },
            {
                "quality": 80,
                "format": "flv",
                "new_description": "1080P 高清",
                "display_desc": "1080P",
                "superscript": "",
                "codecs": [
                    "av01.0.08M.08.0.110.01.01.01.0",
                    "avc1.640032",
                    "avc1.640033",
                    "hev1.1.6.L150.90"
                ]
            },
            {
                "quality": 64,
                "format": "flv720",
                "new_description": "720P 高清",
                "display_desc": "720P",
                "superscript": "",
                "codecs": [
                    "av01.0.08M.08.0.110.01.01.01.0",
                    "avc1.640028",
                    "avc1.640033",
                    "hev1.1.6.L120.90"
                ]
            },
            {
                "quality": 32,
                "format": "flv480",
                "new_description": "480P 清晰",
                "display_desc": "480P",
                "superscript": "",
                "codecs": [
                    "av01.0.08M.08.0.110.01.01.01.0",
                    "avc1.64001F",
                    "avc1.640033",
                    "hev1.1.6.L120.90"
                ]
            },
            {
                "quality": 16,
                "format": "flv360",
                "new_description": "360P 流畅",
                "display_desc": "360P",
                "superscript": "",
                "codecs": [
                    "av01.0.08M.08.0.110.01.01.01.0",
                    "avc1.64001E",
                    "avc1.640033",
                    "hev1.1.6.L120.90"
                ]
            }
        ]

        this.dolby = {
            "type": 0,
            "audio": null
        }
        this.flac = null
        this.high_format = null
        this.duration = 152,        // 视频长度	秒值

        this.audio = audio.call(this, data.audio)
        this.video = video.call(this, data.video)

        
    }

    static codecs(str) {
        const codecsObj = {
            "hev": "使用HEVC编码",
            "avc": "使用AVC编码",
            "av": "使用AV1编码"
        }
        for (const key in codecsObj) {
            const msg = codecsArr[key];
            if (str.startsWith(key)) return msg
        }
    }
    static audioId(){

    }
}