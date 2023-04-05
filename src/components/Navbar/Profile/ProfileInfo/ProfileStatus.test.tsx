import React from 'react'
import { create } from 'react-test-renderer'
import {ProfileStatus} from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'it.com'} updateStatus={() => {}}/>)
        const instance = component.getInstance()
        expect(instance?.instance.state.status).toBe('it.com')
    })
    test('after creating span should be dispalyed with correct status', () => {
        const component = create(<ProfileStatus status={'it.com'} updateStatus={() => {}}/>).root
        let span = component.findAllByType('span')
        expect(span?.length).toBe(0)
    })
})