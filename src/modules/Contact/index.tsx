import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+963 968467163"
                            target="_blank"
                        >
                            <h3>+963 968467163</h3>
                            <p>
                                you can call me if you have any questions or
                                just want to say hi
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:7R@nawar.site"
                            target="_blank"
                        >
                            <h3>7R@nawar.site</h3>
                            <p>
                                also you can write me an email if you have any
                                questions
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
