import React from 'react'
import { workSection, tabContainer, tab, tabIsActive, hiddenInput } from './Tabs.module.scss'
import cn from 'classnames'

interface TabsProps {
    activeTab: 'Work' | 'Extra'
    setActiveTab: (s: 'Work' | 'Extra') => void
}

/**
 * Filters work projects by category
 */
const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
    return (
        <div className={tabContainer}>
            <label
                htmlFor="work-section-radio--work"
                className={cn([
                    tab,
                    activeTab === 'Work' && tabIsActive
                ])}
                onClick={() => setActiveTab('Work')}
            >
                <input
                    type="radio"
                    name="work-section-radio"
                    id="work-section-radio--work"
                    value="work"
                    className={hiddenInput}
                    defaultChecked={true}
                />
                Work
            </label>
            <label
                htmlFor="work-section-radio--extra"
                className={cn([
                    tab,
                    activeTab === 'Extra' && tabIsActive
                ])}
                onClick={() => setActiveTab('Extra')}
            >
                <input
                    type="radio"
                    name="work-section-radio"
                    id="work-section-radio--extra"
                    value="extra"
                    className={hiddenInput}
                />
                Extra
            </label>
        </div>
    )
}

export default Tabs