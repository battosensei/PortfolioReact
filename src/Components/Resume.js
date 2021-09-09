import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                {/* <div className="resume-content">
                    <ResumeItem 
                        year={'2001 - 2010'} 
                        title={'Shop Director'}
                        subTitle={'Gemo'}
                        text={'ERAM group store Manager in their Gemo point of sale. '} 
                    />
                    <ResumeItem 
                        year={'2008 - 2020'} 
                        title={'Disease'}
                        subTitle={'Handicap'}
                        text={'Cluster Headache. '} 
                    />
                </div> */}
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Dev web and mobile applications'}
                        subTitle={'Web Force 3'}
                        text={'8-month intensive web and mobile web developer training in the force 3 web school'} 
                    />
                    <ResumeItem 
                        year={'2021 - 2022'} 
                        title={'Front-end Dev'}
                        subTitle={'CodeAcademy'}
                        text={'Front-End Engineer 121 lessons'} 
                    />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
