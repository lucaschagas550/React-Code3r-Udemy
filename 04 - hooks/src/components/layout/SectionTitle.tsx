import './SectionTitle.css'
import React from 'react'

interface SectionTitleProps {
    title: string
}

const SectionTitle = (props: SectionTitleProps) => (
    <div className="SectionTitle">
        <h3>{props.title}</h3>
    </div>
)

export default SectionTitle;