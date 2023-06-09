import Styles from "@/components/result/ResultCard.module.scss";
import { UserImg } from "../UserImg";
import { useRecoilState } from "recoil";
import { gameState } from "@/recoil/socket";

const ResultCard = () => {
  const [game, setGame] = useRecoilState(gameState);
  console.log(game);
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.resultOpenData}>
        {game &&
          game.problems[game.turn - 1].answers?.map((data, index) => (
            <div key={index}>
              {data.type == "read" && index <= game.users.length && (
                <div className={Styles.answerWrapper}>
                  <div className={Styles.userWrapper}>
                    <div className={Styles.userImg}>
                      {data.userId !== "-1" && (
                        <UserImg
                          userId={
                            game.users.find(
                              (user) => user.userId === data.userId
                            )?.username
                          }
                        />
                      )}
                    </div>
                    <p className={Styles.userName}>
                      {data.userId !== "-1"
                        ? game.users.find((user) => user.userId === data.userId)
                            ?.username
                        : "お題"}
                    </p>
                  </div>
                  <div className={Styles.answerData}>{data.readAnswer}</div>
                </div>
              )}
              {data.type == "code" && index <= game.users.length && (
                <div className={Styles.codeWrapper}>
                  <div className={Styles.userWrapper}>
                    <div className={Styles.userImg}>
                      <UserImg
                        userId={
                          game.users.find((user) => user.userId === data.userId)
                            ?.username
                        }
                      />
                    </div>
                    <p className={Styles.userName}>
                      {
                        game.users.find((user) => user.userId === data.userId)
                          ?.username
                      }
                    </p>
                  </div>
                  <div className={Styles.codeData}>
                    <div className={Styles.codeLanguage}>{data.language}</div>
                    <div className={Styles.codeAnswer}>{data.codeAnswer}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResultCard;
