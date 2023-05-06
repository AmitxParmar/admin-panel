import SettingNav from '@/components/Sidebar/Settings/SettingNav';
import SettingsSidebarItem from '@/components/Sidebar/Settings/SettingsSidebarItem';
import React, { type ReactNode } from 'react'
import { settings } from '../../utils/contants';

type Props = {
    children: ReactNode
}

const SettingsLayout = (props: Props) => {
    return (
        <>
            <SettingNav>
                
                {settings.map(({ icon, name, subItem }, index) =>
                (
                    <SettingsSidebarItem key={index} icon={icon} name={name} subItem={subItem} />
                )
                )}
            </SettingNav>
            <div className='ml-[225px] px-16 py-12'>
                {props.children ?? null}
            </div>
        </>

    )
}

export default SettingsLayout;