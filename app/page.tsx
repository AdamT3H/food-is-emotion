"use client";

import styles from "../app/home.module.css";

import { useRef } from "react";

import CountdownTimer from "../components/timer";
import Typewriter from "../components/typewriter";

export default function Home() {
  const lastSectionRef = useRef<HTMLButtonElement | null>(null);

  const scrollToLast = () => {
    lastSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroTitles}>
            <h1 className={styles.heroTitle}>
              Коли їжа — це емоції
            </h1>

            <h2 className={styles.heroSubtitle}>
              Ви не переїдаєте через слабку силу волі
            </h2>

            <h2 className={styles.heroSubtitle2}>
              Ви просто не вмієте по-іншому справлятись з емоціями
            </h2>
          </div>

          <div className={styles.heroTimer}>
            <CountdownTimer />
            <img src="/IMG_3197.PNG" className={`${styles.pizzaIcon} ${styles.pizzaIcon1}`} />
          </div>

          <div className={styles.heroPrice}>
            <span className={styles.heroOldPrice}>
              1599 грн
            </span>
            <span className={styles.heroNewPrice}>
              199 грн
            </span>
          </div>

          <div className={styles.heroCta}>
            <button
              className={styles.heroButton}
              onClick={scrollToLast}
            >
              Отримати міні-курc
            </button>
          </div> 

          <div className={styles.heroPhotoWrap}>
            <img src="/IMG_3196.png" alt="photo" className={styles.heroPhoto} />
          </div>
        </div>

        <div className={styles.helpToKnowContainer}>
          <div className={styles.helpToKnowLeft}>
            <div className={styles.helpToKnowTitle}>
              Міні-курс, який допоможе зрозуміти:
            </div>

            <img src="/IMG_3198.PNG" className={`${styles.pizzaIcon} ${styles.pizzaIcon2}`} />

            <div className={styles.helpToKnowTypewriter}>
              <Typewriter />
            </div>
          </div>

          <div className={styles.helpToKnowRight}>
            <div className={styles.helpToKnowItem}>
              5 коротких уроків
            </div>

            <div className={styles.helpToKnowItem2}>
              доступ одразу після оплати
            </div>
          </div>
        </div>

        <div className={styles.sectionWrapper}>
          <p className={styles.sectionIntro}>Ви точно знаєте це відчуття</p>
          <h2 className={styles.sectionTitle}>Якщо хоч один пункт — про вас, ця сторінка для вас</h2>

          <div className={styles.symptomsGrid}>
            <div className={styles.symptomCard}>
              <div className={styles.symptomDot}></div>
              <span className={styles.symptomText}>Їсте, навіть коли вже наїлись</span>
            </div>
            <div className={styles.symptomCard}>
              <div className={styles.symptomDot}></div>
              <span className={styles.symptomText}>Не можете зупинитися на солодкому</span>
            </div>
            <div className={styles.symptomCard}>
              <div className={styles.symptomDot}></div>
              <span className={styles.symptomText}>«Зриваєтесь», навіть якщо тримались</span>
            </div>
            <div className={styles.symptomCard}>
              <div className={styles.symptomDot}></div>
              <span className={styles.symptomText}>Постійно думаєте про їжу</span>
            </div>
            <div className={styles.symptomCard}>
              <div className={styles.symptomDot}></div>
              <span className={styles.symptomText}>Після їжі відчуваєте провину</span>
            </div>
            <div className={styles.symptomCard}>
              <div className={styles.symptomDot}></div>
              <span className={styles.symptomText}>Намагаєтесь контролювати себе — але не виходить</span>
            </div>
          </div>
          </div> 

          <div className={styles.cycleBanner}>
            <div className={styles.cycleTitle}>
              І кожен раз одне й те саме:
            </div>

            <div className={styles.cycleBannerWrapper}>
              <span className={styles.cycleStep}>
                обіцяєте почати заново
              </span>

              <span className={styles.cycleArrow}>→</span>

              <span className={styles.cycleStep}>
                тримаєтесь
              </span>

              <span className={styles.cycleArrow}>→</span>

              <span className={styles.cycleStep}>
                зриваєтесь
              </span>

              <span className={styles.cycleArrow}>→</span>

              <span className={styles.cycleStep}>
                ненавидите себе ще більше
              </span>
            </div>
          </div>

          <div className={styles.spoilerSection}>
            <span className={styles.spoilerLabel}>Спойлер</span>
            <p className={styles.spoilerTitle}>Справа не в силі волі</p>
            <p className={styles.spoilerSub}>Вам здається, що проблема — в їжі. Але їжа тут ні до чого.</p>

            <hr className={styles.spRule}/>
 
            <div className={styles.spPair}>
              <p>Ви не переїдаєте через голод</p>
              <p>Ви їсте, щоб впоратись зі станом</p>
              <img src="/IMG_3199.PNG" className={`${styles.pizzaIcon} ${styles.pizzaIcon3}`} />
            </div>
        
            <p className={styles.spPrefixTitle}>Їжа стає способом</p>
            <div className={styles.spLine}>
              <span className={styles.spPrefix}>заспокоїтись</span>
              <span className={styles.spArrow}>→</span>
              <span className={styles.spPrefix}>відволіктись</span>
              <span className={styles.spArrow}>→</span>
              <span className={styles.spPrefix}>не відчувати</span>
              <span className={styles.spArrow}>→</span>
              <span className={styles.spPrefix}>заповнити пустоту</span>
            </div>
        
            <p className={styles.spFooter}>
              І поки їжа виконує цю функцію —<br/>
              ви не зможете просто «перестати»
            </p>
          </div>

          <div className={styles.heroCta}>
            <button
              className={styles.heroButton}
              onClick={scrollToLast}
            >
              Отримати міні-курc
            </button>
          </div>
      </div>

      <div className={styles.willLearn}>
        <div className="container">
          <div className={styles.willLearnContainer}>
            <p className={styles.willLearnContainerTitle}>Цей міні-курс дасть вам розуміння:</p>

            <ul className={styles.willLearnContainerList}>
              <li>Чому ви їсте без фізичного голоду</li>
              <li>Чому не чуєте сигнали тіла</li>
              <li>Як працює імпульс “піти і поїсти”</li>
              <li>Що стоїть за переїданням</li>
              <li>Як почати змінювати це без жорсткого контролю</li>
            </ul>

          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.program}>
          <p className={styles.programTitle}>Програма курсу</p>
      
          <div className={styles.programGrid}>
            <div className={styles.programCard}>
              <div className={styles.programNum}>Урок 1</div>
              <div className={styles.programCardTitle}>Чому ви їсте, навіть коли вже наїлись</div>
              <div className={styles.programCardSub}>Розберемо, що насправді стоїть за переїданням</div>
            </div>
            <div className={styles.programCard}>
              <div className={styles.programNum}>Урок 2</div>
              <div className={styles.programCardTitle}>Чому ви не чуєте своє тіло</div>
              <div className={styles.programCardSub}>Чому ви втратили контакт із собою і як його повернути</div>
            </div>
            <div className={styles.programCard}>
              <div className={styles.programNum}>Урок 3</div>
              <div className={styles.programCardTitle}>Що робити з імпульсом «піти і поїсти»</div>
              <div className={styles.programCardSub}>Як працює імпульс і як його проживати</div>
            </div>
            <div className={styles.programCard}>
              <div className={styles.programNum}>Урок 4</div>
              <div className={styles.programCardTitle}>Що робити, щоб не заїдати емоції</div>
              <div className={styles.programCardSub}>Альтернатива їжі як способу справлятись</div>
            </div>
          </div>

          <img src="/IMG_3200.PNG" className={`${styles.pizzaIcon} ${styles.pizzaIcon4}`} />
        </div>

        <div className={styles.photoWrapper}>
          <img src="/IMG_2221.png" className={styles.photo1} />
        </div>

        <div className={styles.aboutMe}>
          <div className={styles.aboutMeLabel}>
            Про спікера
          </div>
          <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMeName}>
              Я — Анастасія Чередник, психолог
            </div>

            <div className={styles.aboutMeText}>
              Працюю з темою розладів харчової поведінки та допомагаю людям відновлювати здорові стосунки з їжею і тілом.
            </div>

            <div className={styles.aboutMeText}>
              У своїй практиці я бачу одну й ту саму історію: люди роками намагаються “взяти себе в руки”, але тільки сильніше заганяють себе у цикл: контроль → зрив → провина
            </div>

            <div className={styles.aboutMeHighlight}>
              І саме з цього кола ми будемо виходити
            </div>
          </div>
        </div>

        <div className={styles.courseBlock}>
          <div className={styles.courseSection}>
            <img src="/IMG_3201.PNG" className={`${styles.pizzaIcon} ${styles.pizzaIcon5}`} />

            <div className={styles.courseTitle}>
              Цей курс для вас, якщо:
            </div>

            <div className={styles.courseText}>
              Ви “вічно худнете”, але не худнете<br />
              Не можете зупинитися в їжі<br />
              Заїдаєте емоції<br />
              Відчуваєте втрату контролю<br />
              Хочете перестати жити в постійній боротьбі з собою
            </div>
          </div>

          <div className={styles.courseSection}>
            <div className={styles.courseTitle}>
              Після курсу ви:
            </div>

            <div className={styles.courseText}>
              Зрозумієте, чому це з вами відбувається<br />
              Перестанете звинувачувати себе<br />
              Побачите, де запускається переїдання<br />
              Отримаєте перші інструменти змін
            </div>
          </div>
        </div>
        <div className={styles.heroCta}>
            <button
              className={styles.heroButton}
              onClick={scrollToLast}
            >
              Отримати міні-курc
            </button>
          </div> 
      </div> 
    </>
  );
}