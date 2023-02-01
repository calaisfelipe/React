import Counter from './Counter'
import Title from './title'
import styles from './Contador.module.css'

import useCountdown from '../../hooks/useCountdown'

function Contador({tittle, data})
{

  console.log(data) //2023-03-13
  //'Mar 13, 2023 00:00:00'
  let tratamentoData = data.split('-')
  console.log(tratamentoData)

  if(tratamentoData[1] === '01'){
    tratamentoData[1] = 'Jan'
  }else if(tratamentoData[1] === '02'){
    tratamentoData[1] = 'Feb'
  }else if(tratamentoData[1] === '03'){
    tratamentoData[1] = 'Mar'
  }else if(tratamentoData[1] === '04'){
    tratamentoData[1] = 'Apr'
  }else if(tratamentoData[1] === '05'){
    tratamentoData[1] = 'May'
  }else if(tratamentoData[1] === '06'){
    tratamentoData[1] = 'Jun'
  }else if(tratamentoData[1] === '07'){
    tratamentoData[1] = 'Jul'
  }else if(tratamentoData[1] === '08'){
    tratamentoData[1] = 'Aug'
  }else if(tratamentoData[1] === '09'){
    tratamentoData[1] = 'Sep'
  }else if(tratamentoData[1] === '10'){
    tratamentoData[1] = 'Oct'
  }else if(tratamentoData[1] === '11'){
    tratamentoData[1] = 'Nov'
  } else{
    tratamentoData[1] = 'Dez'
  }


  const ModifiedData = `${tratamentoData[1]} ${tratamentoData[2]}, ${tratamentoData[0]} 00:00:00`

  console.log(ModifiedData)
   
    const [day, hour, minute , second] = useCountdown(ModifiedData)

    return(
        <div className={styles.container}>
          <Title title={tittle} />
          <div className={styles.countdownContainer}>

            <Counter number={day} title='dias'/>
            <Counter number={hour} title='horas'/>
            <Counter number={minute} title='minutos'/>
            <Counter number={second} title='segundos'/>


          </div>


      </div>


    )
}

export default Contador