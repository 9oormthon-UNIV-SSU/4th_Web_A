// 사용한 API : TMDB 현재 한국에서 상영 중인 영화 API
// API Document : https://developers.themoviedb.org/3/movies/get-now-playing
// Request : https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR

// 아래는 Response Data
export const dummy = {

    "dates": {
        "maximum": "2025-05-28",
        "minimum": "2025-04-16"
    },
    "page": 1,
    "results": [
        {
        "adult": false,
        "backdrop_path": "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        "genre_ids": [
            10751,
            35,
            12,
            14
        ],
        "id": 950387,
        "original_language": "en",
        "original_title": "A Minecraft Movie",
        "overview": "왕년의 게임 챔피언이었지만 지금은 폐업 직전의 게임샵 주인이 된 '개릿'과 엄마를 잃고 낯선 동네로 이사 온 남매 '헨리'와 '나탈리' 그리고 그들을 돕는 부동산 중개업자 '던'. 이들은 ‘개릿’이 수집한 ‘큐브’가 내뿜는 신비한 빛을 따라가다 어느 폐광 속에 열린 포털을 통해 미지의 공간으로 빨려들어간다. 산과 나무, 구름과 달, 심지어 꿀벌까지 상상하는 모든 것이 네모난 현실이 되는 이곳은 바로 ‘오버월드’. 일찍이 이 세계로 넘어와 완벽하게 적응한 ‘스티브’를 만난 네 사람은 지하세계 ‘네더’를 다스리는 마법사 ‘말고샤’의 침공으로 ‘오버월드’가 위험에 빠졌다는 사실을 알게 된다. 현실 세계로 돌아가기 위해서는 일단 살아남아야 하는 법! 다섯 명의 ‘동글이’들은 ‘오버월드’를 구하기 위해 힘을 합치게 되는데…",
        "popularity": 694.9673,
        "poster_path": "/k5aQ2TqKcQFwPoXHkpAGoKNVDLZ.jpg",
        "release_date": "2025-04-26",
        "title": "A MINECRAFT MOVIE 마인크래프트 무비",
        "video": false,
        "vote_average": 6.518,
        "vote_count": 1436
        },
        {
        "adult": false,
        "backdrop_path": "/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
        "genre_ids": [
            27,
            9648
        ],
        "id": 574475,
        "original_language": "en",
        "original_title": "Final Destination Bloodlines",
        "overview": "끝없는 악몽에 시달리던 ‘스테파니’는 그 원인을 찾던 중  집안 대대로 내려오는 죽음의 저주와 그 실체를 알게 된다  놀랍게도, 죽음의 순서가 자신의 가족에게 이어졌음을 알게 되는데...  이제, 다음 차례는 누구?",
        "popularity": 535.0346,
        "poster_path": "/agaIglFrRGuUQOzkhzlrvcjJgt2.jpg",
        "release_date": "2025-05-14",
        "title": "파이널 데스티네이션: 블러드라인",
        "video": false,
        "vote_average": 7.061,
        "vote_count": 408
        },
        {
        "adult": false,
        "backdrop_path": "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        "genre_ids": [
            10751,
            35,
            878
        ],
        "id": 552524,
        "original_language": "en",
        "original_title": "Lilo & Stitch",
        "overview": "보송보송한 파란 솜털, 호기심 가득한 큰 눈, 장난기 가득한 웃음을 가졌지만..! 가장 위험한 실험체 취급을 받던 ‘스티치’는 우주에서 도망쳐 지구의 하와이 섬에 불시착하게 된다. 단짝 친구를 원하던 외톨이 소녀 ‘릴로’는 별똥별과 함께 나타난 귀여운 파란색 강아지(?) ‘스티치’와 소중한 친구이자, 하나의 가족이 되어가며 외로웠던 일상이 유쾌하게 변하기 시작한다. 그러던 어느 날, ‘스티치’를 잡아 우주로 되돌아가려는 정체불명의 요원들이 등장하고 ‘릴로’와 ‘스티치’는 예상치 못한 상황을 마주하게 되는데..!",
        "popularity": 508.3123,
        "poster_path": "/ww7jn7lv1YzTAGd5m0R6CP1VXAs.jpg",
        "release_date": "2025-05-21",
        "title": "릴로 & 스티치",
        "video": false,
        "vote_average": 7.116,
        "vote_count": 160
        },
        {
        "adult": false,
        "backdrop_path": "/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        "genre_ids": [
            28,
            12,
            53
        ],
        "id": 575265,
        "original_language": "en",
        "original_title": "Mission: Impossible - The Final Reckoning",
        "overview": "디지털상의 모든 정보를 통제할 수 있는 사상 초유의 무기로 인해 전 세계 국가와 조직의 기능이 마비되고, 인류 전체가 위협받는 절체절명의 위기가 찾아온다. 이를 막을 수 있는 건 오직 존재 자체가 기밀인 에단 헌트와 그가 소속된 IMF뿐이다. 무기를 무력화하는 데 반드시 필요한 키를 손에 쥔 에단 헌트. 오랜 동료 루터와 벤지, 그리고 새로운 팀원이 된 그레이스, 파리, 드가와 함께 지금껏 경험했던 그 어떤 상대보다도 강력한 적에 맞서 모두의 운명을 건 불가능한 미션에 뛰어든다.",
        "popularity": 325.1914,
        "poster_path": "/5Zxdorl5TharlI9S47YxoKzGCsi.jpg",
        "release_date": "2025-05-17",
        "title": "미션 임파서블: 파이널 레코닝",
        "video": false,
        "vote_average": 6.985,
        "vote_count": 300
        },
        {
        "adult": false,
        "backdrop_path": "/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "genre_ids": [
            28,
            878,
            12
        ],
        "id": 986056,
        "original_language": "en",
        "original_title": "Thunderbolts*",
        "overview": "어벤져스가 사라진 후, 세계 최대의 위협과 마주한 세상을 구하기 위해 전직 스파이, 암살자, 살인 청부 업자 등 마블의 별난 놈들이 펼치는 예측불허 팀플레이를 담은 액션 블록버스터",
        "popularity": 167.4446,
        "poster_path": "/1lI4iDsaVnOnnZPI9igWkL8jHPL.jpg",
        "release_date": "2025-04-30",
        "title": "썬더볼츠*",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 985
        },
        {
        "adult": false,
        "backdrop_path": "/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 1233413,
        "original_language": "en",
        "original_title": "Sinners",
        "overview": "1932년, 시카고 갱단의 생활을 정리하고 고향 미시시피로 돌아온 쌍둥이 형제 스모크와 스택은 큰돈을 벌기 위해 술집 주크 조인트를 운영하기로 한다. 화려한 오프닝 파티가 열리는 밤, 천부적인 재능을 지닌 새미의 노래로 파티의 열기는 점점 뜨거워지고 초대하지 않은 불청객 일행이 찾아오는데…",
        "popularity": 111.2267,
        "poster_path": "/5Tj7729s3MLmzNnAzaHSCWtzj5o.jpg",
        "release_date": "2025-05-28",
        "title": "씨너스: 죄인들",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 770
        },
        {
        "adult": false,
        "backdrop_path": "/hwlyY7LJdEFbCPaGNXiskKKmJ5X.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 1126166,
        "original_language": "en",
        "original_title": "Flight Risk",
        "overview": "범죄와 연루된 중요한 증인 ‘윈스턴’을 찾은 보안관 ‘해리스’는, 알래스카에서 뉴욕까지 ‘윈스턴’을 이송해야만 한다.  하지만 어딘가 수상한 비행기의 파일럿이 증인을 제거하려는 암살자임을 알게 되고, 이제 세상에서 가장 위험한 비행이 시작되는데… 도망갈 곳 없는 상공 1만 피트! 암살자를 피해 무사히 착륙해야 한다!",
        "popularity": 58.6218,
        "poster_path": "/zstC9sgsPaV98TaZtHL6aTtBUtB.jpg",
        "release_date": "2025-05-20",
        "title": "플라이트 리스크",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 743
        },
        {
        "adult": false,
        "backdrop_path": "/n4R5Ad6rwf87lmllFNuYR3io30V.jpg",
        "genre_ids": [
            9648,
            53
        ],
        "id": 1249213,
        "original_language": "en",
        "original_title": "Drop",
        "overview": "몇 년 만의 데이트에 나선 싱글맘 바이올렛. 데이트 상대인 헨리와 즐거운 식사를 하던 도중 같은 레스토랑에 있는 누군가로부터 의문의 메시지를 받게 된다. 단순한 장난으로 치부하며 넘기려는 그녀에게 헨리를 죽이지 않으면 자신의 아들이 죽는다는 협박이 이어지고 이내 공포에 빠진 그녀는 익명의 위협에서 벗어나기 위해 고군분투하는데...",
        "popularity": 40.3756,
        "poster_path": "/l7Xj2XB7tRg1UqF4x5Prlc2LssQ.jpg",
        "release_date": "2025-04-23",
        "title": "드롭",
        "video": false,
        "vote_average": 6.524,
        "vote_count": 347
        },
        {
        "adult": false,
        "backdrop_path": "/jl2YIADk391yc6Qjy9JhgCRkHJk.jpg",
        "genre_ids": [
            16,
            18,
            35
        ],
        "id": 1064486,
        "original_language": "en",
        "original_title": "Memoir of a Snail",
        "overview": "'그레이스'는 자신의 달팽이, '실비아'에게 살아온 이야기를 시작한다. 잦은 병치레, 수면무호흡증으로 언제 위험해질지 모르는 알코올 중독자 아빠, 또래 친구들의 괴롭힘… 씁쓸한 유년 시절 유일한 빛이자 영웅이 되어준 건 쌍둥이 '길버트'이다. 하지만 서로 다른 지역으로 입양돼 헤어지게 되며 서로에 대한 그리움으로 하루하루를 살아나간다. 계속되는 잔잔하고도 외로운 일상 속, 우연히 ‘핑키’라는 괴짜 할머니를 만나 우정을 쌓게 되고 그레이스는 다시금 인생의 희망을 찾아가기 시작하는데…",
        "popularity": 35.7685,
        "poster_path": "/vh549pxJL5GcQ8MN1jLgubOsNrq.jpg",
        "release_date": "2025-04-30",
        "title": "달팽이의 회고록",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 511
        },
        {
        "adult": false,
        "backdrop_path": "/hRn5oyuhrVFjLwDpe73UvqgvPht.jpg",
        "genre_ids": [
            28,
            14,
            27
        ],
        "id": 793387,
        "original_language": "ko",
        "original_title": "거룩한 밤: 데몬 헌터스",
        "overview": "악을 숭배하는 집단에 의해 혼란에 빠진 도시, 특별한 능력을 가진 어둠의 해결사 거룩한 밤 팀 바우, 샤론, 김군이 악의 무리를 처단하는 오컬트 액션",
        "popularity": 28.0202,
        "poster_path": "/7MGnHpfhF8savUsrUJoI8Q7dTk9.jpg",
        "release_date": "2025-04-30",
        "title": "거룩한 밤: 데몬 헌터스",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 4
        },
        {
        "adult": false,
        "backdrop_path": "/aGgr2Q07AcyiWPGODoofgZDUEHp.jpg",
        "genre_ids": [
            28,
            35,
            10749
        ],
        "id": 1226406,
        "original_language": "en",
        "original_title": "Love Hurts",
        "overview": "어두운 과거를 뒤로 한 채 성공한 부동산 중개인으로 소소한 행복을 찾아가며 살고 있는 마빈. 어느 날, 과거 함께 일했던 로즈의 예상치 못한 메시지를 받게 되고 자신이 몸 담았던 조직의 두목이자 그의 형인 너클스까지 그를 쫓기 시작한다. 평온한 삶을 되찾고 싶은 마빈은 결국  그토록 지우고 싶었던, 끝나지 않은 과거를 다시 한번 마주해야 하는데…",
        "popularity": 22.2843,
        "poster_path": "/fKYk2JsghymzIXRyVlfnVYH1b8U.jpg",
        "release_date": "2025-05-14",
        "title": "위드 러브",
        "video": false,
        "vote_average": 5.942,
        "vote_count": 190
        },
        {
        "adult": false,
        "backdrop_path": "/kXxriYfAWtMJNHGHVYr09c37L07.jpg",
        "genre_ids": [
            878,
            53
        ],
        "id": 650033,
        "original_language": "ru",
        "original_title": "Свободное падение",
        "overview": "인류 역사상 최악의 태양 폭발로 순식간에 동료들을 잃은 ‘막심’. 숨 돌릴 틈도 없이 이어지는 폭발에 ‘막심’은 우주정거장과의 통신이 두절된 채 홀로 고립된다. 오로지 AI ‘안야’에 의존할 수밖에 없는 ‘막심’은 무사 귀환을 위해 생존 확률 1%를 뚫어야만 하는 치열한 사투를 벌이는데…",
        "popularity": 22.0869,
        "poster_path": "/7MuAK5OwVKNzUmGyrf3LHtade8l.jpg",
        "release_date": "2025-05-21",
        "title": "프리 폴",
        "video": false,
        "vote_average": 4.6,
        "vote_count": 5
        },
        {
        "adult": false,
        "backdrop_path": "/qocKcY8QVgWiG4HKD7CP5yApXDr.jpg",
        "genre_ids": [
            18,
            35,
            80
        ],
        "id": 1137350,
        "original_language": "en",
        "original_title": "The Phoenician Scheme",
        "overview": "6번의 추락 사고와 숱한 암살 위협으로부터 살아 돌아온 거물 사업가 자자 코다. 계속되는 경쟁자들의 방해에 위협을 느낀 그는 일생일대 숙원 사업인 ‘페니키안 스킴’을 완수하기 위해 수련수녀인 외동딸 리즐을 상속자로 지정하고 집으로 불러들인다. 그러나, 갑작스러운 적들의 방해로 인해 자자 코다의 사업이 무너질 위기에 처하자, 자자는 딸 리즐과 가정교사 비욘을 데리고 주요 동업자들을 설득하기 위해 페니키아로 떠나는데…",
        "popularity": 15.6972,
        "poster_path": "/ozh99jSatJKBG9OVN9x3XYBYBRN.jpg",
        "release_date": "2025-05-28",
        "title": "페니키안 스킴",
        "video": false,
        "vote_average": 7,
        "vote_count": 10
        },
        {
        "adult": false,
        "backdrop_path": "/zwSDvbnN51JqU1ULzPnEc22DkqV.jpg",
        "genre_ids": [
            10749,
            35,
            18
        ],
        "id": 1272149,
        "original_language": "en",
        "original_title": "Bridget Jones: Mad About the Boy",
        "overview": "4년 전, 사랑하는 남편 '마크 다아시'를 잃고 싱글맘으로 살아가던 '브리짓 존스'. 정체된 그녀의 삶을 걱정하는 주변인들의 권유와 압박으로 데이팅 앱에서 매력적인 연하남과 만나 오랜만에 설레는 사랑의 감정을 되찾는 한편 방송국에도 복직해 일과 가정, 로맨스를 병행하게 된다.  고군분투하며 최선을 다하지만 연하남과의 연애도, 직장 생활도, 아이들과의 관계도 모든 것이 쉽지 않은 상황 속에서 ‘브리짓’은 무엇이 정말 자신을 위한 삶인지 고민하게 되는데…",
        "popularity": 10.1404,
        "poster_path": "/83oQ32Gnj6JqudAK8Ws9Gf7mUWz.jpg",
        "release_date": "2025-04-16",
        "title": "브리짓 존스의 일기: 뉴 챕터",
        "video": false,
        "vote_average": 6.586,
        "vote_count": 324
        },
        {
        "adult": false,
        "backdrop_path": "/XZQ7FxoN9KTKrFzfcnswsHxV0y.jpg",
        "genre_ids": [
            18
        ],
        "id": 1083782,
        "original_language": "en",
        "original_title": "Seven Veils",
        "overview": "‘제닌’은 스승 ‘찰스’의 유언에 따라 그의 대표작이었던 오페라 ‘살로메’의 감독으로 취임한다. 자신을 탐탁치 않아 하는 배우와 제작진 사이에서 고군분투하던 ‘제닌’은 공연에 빠져들수록 억눌렸던 과거의 트라우마와 비밀을 떠올리게 되는데…",
        "popularity": 8.582,
        "poster_path": "/n7E8LV1z7Va6JdFlsjM8pSZaxMJ.jpg",
        "release_date": "2025-05-14",
        "title": "세븐 베일즈",
        "video": false,
        "vote_average": 6,
        "vote_count": 17
        },
        {
        "adult": false,
        "backdrop_path": "/iZ0ZSnhmHB3k1KDkDzEz65f5iia.jpg",
        "genre_ids": [
            16,
            28,
            878
        ],
        "id": 1326106,
        "original_language": "ja",
        "original_title": "アニメ『怪獣８号』第１期総集編／同時上映「保科の休日」",
        "overview": "괴수로 가득한 일본에서 괴물 사체 처리 작업을 하고 있는 ‘히비노 카프카’는\r 소꿉친구이자 방위대의 떠오르는 스타 ‘아시로 미나’의 모습을 보고\r 다시 한번 꿈에 도전하기로 결심한다.  어느 날 갑작스럽게 강력한 “괴수 8호”로 변신하게 된 ‘카프카’.\r 후배 ‘이치카와 레노’의 도움을 받아 정체를 숨긴 채,\r 그는 오랜 꿈이었던 방위대 시험에 합격하였고\r ‘미나’의 곁에 서는 것을 목표로 나아간다.  그러나 의문의 괴수가 방위대 기지를 공격하자,\r ‘카프카’는 절박한 상황 속에서 중요한 결정에 직면하게 되는데…  「호시나의 휴일」\r 휴일이란 방위대에게는 매우 드물게 평화로운 날.\r 긴 훈련 끝에 찾아 온 휴일에 방황하는 ‘레노’는 ‘이하루’와 함께\r 휴일을 보내는 ‘호시나’ 부대장을 미행해보기로 한다.\r 하지만 두 사람의 미행은 예상치 못한 방향으로 흘러가고 마는데…?!",
        "popularity": 6.3595,
        "poster_path": "/ziPpGchWdwiJaAXIbt4Tu0uNeBA.jpg",
        "release_date": "2025-05-07",
        "title": "괴수 8호: 미션 리컨",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 7
        },
        {
        "adult": false,
        "backdrop_path": "/pD5Z6YglDNcRhcrCJKDhJlbGzni.jpg",
        "genre_ids": [
            36,
            10402,
            18
        ],
        "id": 279,
        "original_language": "en",
        "original_title": "Amadeus",
        "overview": "비엔나 왕실의 궁정음악가였던 ‘살리에리’  천재라 불리는 신성, ‘모차르트’가 등장한 어느 날  그의 천재성을 확인하고자 했던 ‘살리에리’는  방탕하고, 오만하고, 천박한 ‘모차르트’의 행동에 충격을 받는다  그런 ‘모차르트’를 인정할 수 없었던 ‘살리에리’는  부던한 노력에도 ‘모차르트’의 천재성을 이겨낼 수 없었고  결국 ‘모차르트’를 파멸로 이끌 거대한 음모를 준비하는데…  신의 사랑을 받은 천재, ‘볼프강 아마데우스 모차르트’  그를 파멸시킨 인간의 이야기가 펼쳐진다!",
        "popularity": 5.9663,
        "poster_path": "/r7iKeLpYfQNYpyJhCEZDYfjO69D.jpg",
        "release_date": "1985-11-23",
        "title": "아마데우스",
        "video": false,
        "vote_average": 8,
        "vote_count": 4402
        },
        {
        "adult": false,
        "backdrop_path": "/fepnF3W4VP3s8ui8nDtrlsFVYwO.jpg",
        "genre_ids": [
            28,
            9648,
            18
        ],
        "id": 1247002,
        "original_language": "ko",
        "original_title": "파과",
        "overview": "40여 년간 감정 없이 바퀴벌레 같은 인간들을 방역해온 60대 킬러 조각. 대모님이라 불리며 살아있는 전설로 추앙받지만 점차 오랜 시간 몸담은 회사 신성방역에서조차도 한물간 취급을 받는다. 한편, 평생 조각을 쫓은 젊고 혈기 왕성한 킬러 투우는 신성방역의 일원이 되고 조각에게서 시선을 떼지 않는다. 지켜야 할 건 만들지 말자고 약속했던 조각은 여전한 실력에도 불구하고 상처를 입은 그날 밤, 자신을 치료해 준 수의사 강선생과 그의 딸에게 남다른 감정을 느낀다. 투우는 그런 낯선 조각의 모습에 분노가 폭발하는데…",
        "popularity": 5.3662,
        "poster_path": "/du65x58CJrMMThuiT85kBFMYi0Z.jpg",
        "release_date": "2025-04-30",
        "title": "파과",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
        },
        {
        "adult": false,
        "backdrop_path": "/9iw4a6AQkxUO3EuRn59Vgrqf0zO.jpg",
        "genre_ids": [
            18,
            10402
        ],
        "id": 1038263,
        "original_language": "en",
        "original_title": "Maria",
        "overview": "음악이 인생의 전부였고 무대가 존재의 이유였던 세기의 프리마돈나, 불멸의 소프라노, 마리아 칼라스가 오로지 자신만을 위해 준비한 마지막 무대.",
        "popularity": 4.3788,
        "poster_path": "/2lIoQkkqlgl2MgsLNkVjejzHgVU.jpg",
        "release_date": "2025-04-16",
        "title": "마리아",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 308
        },
        {
        "adult": false,
        "backdrop_path": "/9pdoEzieGdUTlRWTAO7QP8q1tIo.jpg",
        "genre_ids": [
            80
        ],
        "id": 1137179,
        "original_language": "ko",
        "original_title": "야당",
        "overview": "누명을 쓰고 교도소에 수감된 이강수는 검사 구관희로부터 감형을 조건으로 야당을 제안받는다. 강수는 관희의 야당이 돼 마약 수사를 뒤흔들기 시작하고, 출세에 대한 야심이 가득한 관희는 굵직한 실적을 올려 탄탄대로의 승진을 거듭한다.  한편, 마약수사대 형사 오상재는 수사 과정에서 강수의 야당질로 번번이 허탕을 치고, 끈질긴 집념으로 강수와 관희의 관계를 파고든다.  마약판을 설계하는 브로커 강수, 더 높은 곳에 오르려는 관희, 마약 범죄 소탕에 모든 것을 건 상재. 세 사람은 각자 다른 이해관계로 얽히기 시작하는데…",
        "popularity": 4.1222,
        "poster_path": "/22wq8xenneGDZ9K9MLIO8VchQC5.jpg",
        "release_date": "2025-04-16",
        "title": "야당",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 3
        }
    ],
    "total_pages": 4,
    "total_results": 61
    
};