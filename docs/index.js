var $8rQ4N$reactjsxruntime = require("react/jsx-runtime");
var $8rQ4N$reactdomclient = require("react-dom/client");
var $8rQ4N$react = require("react");
var $8rQ4N$styledcomponents = require("styled-components");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}






const $1890fbe046249199$export$c507fb1c2e1ac13a = (0, $8rQ4N$styledcomponents.createGlobalStyle)`
    html {
        height: 100%;
    }

    body {
        margin: 0;
        height: 100%;
        font-size: 16px;
        line-height: 1.2;
        font-family: Arial;
        background: #000;
    }
`;





var $2fb1c158a6e1094d$exports = {};
$2fb1c158a6e1094d$exports = new URL("masha.46507a25.png", "file:" + __filename).toString();



const $e382361385e5ef6d$export$969f10c1881c6dff = ()=>{
    return /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsxs)($e382361385e5ef6d$var$Container, {
        children: [
            /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)("img", {
                src: (0, (/*@__PURE__*/$parcel$interopDefault($2fb1c158a6e1094d$exports))),
                width: 200
            }),
            /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)($e382361385e5ef6d$var$Label, {
                children: "Мария"
            })
        ]
    });
};
const $e382361385e5ef6d$var$Container = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).div`
  position: relative;
  width: 200px;
  margin: 0 auto;
`;
const $e382361385e5ef6d$var$Label = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).div`
  position: absolute;
  display: inline-block;
  left: 120px;
  bottom: 4px;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 16px;
  border: 1px solid #fff;
  background: #333399;
`;





const $1ec3ff06651a272e$export$cef5d51d354050a6 = ({ label: label , onSubmit: onSubmit  })=>{
    const [answer, setAnswer] = (0, $8rQ4N$react.useState)();
    const onChange = (e)=>{
        setAnswer(e.target.value);
    };
    return /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsxs)($1ec3ff06651a272e$var$Container, {
        children: [
            /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)($1ec3ff06651a272e$var$Text, {
                onChange: onChange,
                value: answer
            }),
            /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)($1ec3ff06651a272e$var$Button, {
                onClick: ()=>{
                    onSubmit(answer);
                },
                children: label
            })
        ]
    });
};
const $1ec3ff06651a272e$var$Container = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).div`
  text-align: right;
  margin: 0 auto;
  width: 300px;
`;
const $1ec3ff06651a272e$var$Text = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).textarea`
  display: block;
  resize: none;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 8px;
  font-size: 16px;
  background: none;
  border: 3px solid #772cbf;
  border-radius: 4px;
  outline: none;
  color: #fff;
`;
const $1ec3ff06651a272e$var$Button = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).button`
  margin: 20px auto;
  display: inline-block;
  padding: 10px 16px;
  color: #fff;
  background: #772cbf;
  outline: none;
  border: none;
  font-size: 20px;
  border-radius: 4px;

  &:active {
    background: #551e89;
  }
`;


const $6d1f84cf971d3155$export$6955bcca4cd3539f = ({ text: text , answer: answer , turnPage: turnPage , buttonLabel: buttonLabel  })=>{
    const onSubmit = (value)=>{
        console.log(value, answer);
        if (value === answer) turnPage();
    };
    return /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsxs)($6d1f84cf971d3155$var$StyledPage, {
        children: [
            /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)((0, $e382361385e5ef6d$export$969f10c1881c6dff), {}),
            /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsxs)($6d1f84cf971d3155$var$DialogContainer, {
                children: [
                    /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)($6d1f84cf971d3155$var$Dialog, {
                        children: text.map((item, key)=>/*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)($6d1f84cf971d3155$var$Text, {
                                children: item
                            }, key))
                    }),
                    answer ? /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)((0, $1ec3ff06651a272e$export$cef5d51d354050a6), {
                        label: "Отправить",
                        onSubmit: onSubmit
                    }) : /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)($6d1f84cf971d3155$var$Button, {
                        onClick: turnPage,
                        children: buttonLabel
                    })
                ]
            })
        ]
    });
};
const $6d1f84cf971d3155$var$StyledPage = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).div`
  height: 100%;
  color: #fff;
`;
const $6d1f84cf971d3155$var$DialogContainer = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).div`
  width: 300px;
  margin: 0 auto;
`;
const $6d1f84cf971d3155$var$Dialog = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).div``;
const $6d1f84cf971d3155$var$Text = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).p``;
const $6d1f84cf971d3155$var$Button = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).button`
  margin: 20px auto;
  display: block;
  padding: 10px 16px;
  color: #fff;
  background: #772cbf;
  outline: none;
  border: none;
  font-size: 20px;
  border-radius: 4px;

  &:active {
    background: #551e89;
  }
`;


const $a84dfcf78bb148a6$export$c48cc795f3e7a7c = {
    pages: [
        {
            text: [
                "- Мммммурмяу...то есть привет Юля, а точнее с днем рождения!",
                "- Меня зовут Мария. В это трудно будет поверить, но я связываюсь с тобой из параллельной кошачьей вселенной. Эволюция пошла у нас иным путем и вид кошачьих является высшей ступенью развития. У нас есть технологии, позволяющие читать другие вселенные и даже будущее."
            ],
            buttonLabel: "Далее"
        },
        {
            text: [
                "- Да, понимаю твое удивление. Для нас просмотр параллельных вселенных что-то вроде реалити-шоу.",
                "- Я пришла помочь тебе, потому что твой вредный (хоть и очень красивый) муж не хочет показывать тебе где лежит твой подарок."
            ],
            buttonLabel: "Далее"
        },
        {
            text: [
                "- Почему я помогаю тебе? Потому что из всех моих хозяек, ты самая добрая, отзывчивая и любящая.",
                "- Если ты готова, нажми на кнопку и мы начнем."
            ],
            buttonLabel: "Начать"
        },
        {
            text: [
                "- Прежде, чем мы приступим, тебе нужно пройти аутентификацию для подтверждения личности.",
                "- Введи ниже час своего рождения:"
            ],
            answer: "13"
        },
        {
            text: [
                "- Отлично!) Теперь введи пожалуйста день недели, когда ты родилась (маленькими буквами): "
            ],
            answer: "суббота"
        }
    ]
};


var $b278486116d49f38$exports = {};
$b278486116d49f38$exports = new URL("image.8aa2dbc0.jpeg", "file:" + __filename).toString();


const $7f165bd3b72c71cc$export$86fbec116b87613f = ()=>{
    const [activePage, setActivePage] = (0, $8rQ4N$react.useState)(0);
    const onNext = (pageNumber)=>{
        setActivePage(pageNumber);
    };
    return /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsxs)((0, $8rQ4N$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)((0, $1890fbe046249199$export$c507fb1c2e1ac13a), {}),
            /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)($7f165bd3b72c71cc$var$History, {
                children: (0, $a84dfcf78bb148a6$export$c48cc795f3e7a7c).pages.map((item, key)=>activePage === key && /*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)((0, $6d1f84cf971d3155$export$6955bcca4cd3539f), {
                        active: activePage === key,
                        buttonLabel: item.buttonLabel,
                        turnPage: ()=>setActivePage(key + 1),
                        text: item.text,
                        answer: item.answer,
                        onNext: onNext
                    }, key))
            })
        ]
    });
};
const $7f165bd3b72c71cc$var$History = (0, ($parcel$interopDefault($8rQ4N$styledcomponents))).div`
  margin: 0 auto;
  min-width: 320px;
  max-width: 680px;
  min-height: 800px;
  padding: 40px 20px;
  background-image: url(${(0, (/*@__PURE__*/$parcel$interopDefault($b278486116d49f38$exports)))});
  background-size: cover;
`;


const $4fa36e821943b400$var$container = document.getElementById("app");
const $4fa36e821943b400$var$root = (0, $8rQ4N$reactdomclient.createRoot)($4fa36e821943b400$var$container);
$4fa36e821943b400$var$root.render(/*#__PURE__*/ (0, $8rQ4N$reactjsxruntime.jsx)((0, $7f165bd3b72c71cc$export$86fbec116b87613f), {}));


//# sourceMappingURL=index.js.map
