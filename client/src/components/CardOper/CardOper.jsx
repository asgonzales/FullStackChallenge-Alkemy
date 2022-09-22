import style from './CardOper.module.css';








export default function CardOper ({oper}) {




    return (
        <div className={style.contCardOper}>
            <div className={style.dateNmount}>
                <input type="text" value={oper.date} readOnly />
                <input type='text' value={oper.type==='egreso'?`+ ${oper.mount}`:`- ${oper.mount}`} readOnly />
            </div>
            <div className={style.hideInfo}>
                <div className={style.infoConcept}>
                    <input type="text" value={oper.concept} readOnly />
                </div>
                <div className={style.infoTypes}>
                    <input type='text' value={oper.type} readOnly />
                    <input type='text' value={oper.Category?.name} readOnly />
                </div>
            </div>
        </div>
    )
}