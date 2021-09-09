import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={'Benjamin Brucher Formateur en Développement Web Front-End et Back-End / Développeur Blockchain: Elie était mon élève dans le cadre de sa formation à l école WebForce3. Il est passionné et va constamment plus loin dans l apprentissage du développement web avec une rare soif d apprendre.'} 
                    />
                    <ReviewItem 
                        text={'Victor Weiss Développeur Web Freelance & Formateur:J ai fait la connaissance d Elie lors d une formation Symfony que je donnais, suivie de la réalisation d un projet de groupe. Diligent et toujours motivé, il s est montré particulièrement efficace en Javascript, son langage de prédilection. Il sait s adapter rapidement à son environnement de travail et nous a proposé à plusieurs reprises des recommandations pertinentes sur les différents outils à utiliser, comme par exemple lorsque je me suis retrouvé coincé avec un sélecteur qui ne fonctionnait pas avec Bootstrap 5, en moins de deux minutes il nous en a proposé un autre bibliothèque qui a parfaitement fonctionné et nous avons pu continuer le cours.Merci Elie, j ai hâte de voir les projets que vous allez développer!'} 
                    />
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
