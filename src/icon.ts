/* Copyright 2021, Milkdown by Mirone. */

import { Icon, IconValue } from '@milkdown/design-system';

type IconMeta = {
    icon: string;
    label: string;
};

const iconMapping: Record<Icon, IconMeta> = {
    h1: {
        label: 'h1',
        icon: '/*[To-Do]*/',
    },
    h2: {
        label: 'h2',
        icon: '/*[To-Do]*/',
    },
    h3: {
        label: 'h3',
        icon: '/*[To-Do]*/',
    },
    loading: {
        label: 'loading',
        icon: '/*[To-Do]*/',
    },
    quote: {
        label: 'quote',
        icon: '/*[To-Do]*/',
    },
    code: {
        label: 'code',
        icon: '/*[To-Do]*/',
    },
    table: {
        label: 'table',
        icon: '/*[To-Do]*/',
    },
    divider: {
        label: 'divider',
        icon: '/*[To-Do]*/',
    },
    image: {
        label: 'image',
        icon: '/*[To-Do]*/',
    },
    brokenImage: {
        label: 'broken image',
        icon: '/*[To-Do]*/',
    },
    bulletList: {
        label: 'bullet list',
        icon: '/*[To-Do]*/',
    },
    orderedList: {
        label: 'ordered list',
        icon: '/*[To-Do]*/',
    },
    taskList: {
        label: 'task list',
        icon: '/*[To-Do]*/',
    },
    bold: {
        label: 'bold',
        icon: '/*[To-Do]*/',
    },
    italic: {
        label: 'italic',
        icon: '/*[To-Do]*/',
    },
    inlineCode: {
        label: 'inline code',
        icon: '/*[To-Do]*/',
    },
    strikeThrough: {
        label: 'strike through',
        icon: '/*[To-Do]*/',
    },
    link: {
        label: 'link',
        icon: '/*[To-Do]*/',
    },
    leftArrow: {
        label: 'left arrow',
        icon: '/*[To-Do]*/',
    },
    rightArrow: {
        label: 'right arrow',
        icon: '/*[To-Do]*/',
    },
    upArrow: {
        label: 'up arrow',
        icon: '/*[To-Do]*/',
    },
    downArrow: {
        label: 'down arrow',
        icon: '/*[To-Do]*/',
    },
    alignLeft: {
        label: 'align left',
        icon: '/*[To-Do]*/',
    },
    alignRight: {
        label: 'align right',
        icon: '/*[To-Do]*/',
    },
    alignCenter: {
        label: 'align center',
        icon: '/*[To-Do]*/',
    },
    delete: {
        label: 'delete',
        icon: '/*[To-Do]*/',
    },
    select: {
        label: 'select',
        icon: '/*[To-Do]*/',
    },
    unchecked: {
        label: 'unchecked',
        icon: '/*[To-Do]*/',
    },
    checked: {
        label: 'checked',
        icon: '/*[To-Do]*/',
    },
    undo: {
        label: 'undo',
        icon: '/*[To-Do]*/',
    },
    redo: {
        label: 'redo',
        icon: '/*[To-Do]*/',
    },
    liftList: {
        label: 'lift list',
        icon: '/*[To-Do]*/',
    },
    sinkList: {
        label: 'sink list',
        icon: '/*[To-Do]*/',
    },
};

export const getIcon = (id: Icon): IconValue | undefined => {
    const target = iconMapping[id];
    if (!target) {
        return;
    }
    const span = document.createElement('span');
    span.className = 'iconify';
    span.setAttribute('data-icon', iconMapping[id].icon);

    return {
        dom: span,
        label: target.label,
    };
};
