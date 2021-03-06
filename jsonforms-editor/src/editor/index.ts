/**
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 EclipseSource Munich
 * Licensed under MIT
 * https://github.com/eclipsesource/jsonforms-editor/blob/master/LICENSE
 * ---------------------------------------------------------------------
 */
import { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { materialRenderers } from '@jsonforms/material-renderers';

import { DroppableArrayControlRegistration } from '../core/renderers/DroppableArrayControl';
import { DroppableElementRegistration } from '../core/renderers/DroppableElement';
import { DroppableGroupLayoutRegistration } from '../core/renderers/DroppableGroupLayout';
import {
  DroppableHorizontalLayoutRegistration,
  DroppableVerticalLayoutRegistration,
} from '../core/renderers/DroppableLayout';
import { EditorTab } from './components/EditorPanel';
import { ReactMaterialPreview } from './components/preview';

export { EditorPanel } from './components/EditorPanel';
export { EditorElement } from './components/EditorElement';

export type { EditorTab } from './components/EditorPanel';

export const defaultEditorTabs: EditorTab[] = [
  { name: 'Preview', Component: ReactMaterialPreview },
];

export const defaultEditorRenderers: JsonFormsRendererRegistryEntry[] = [
  ...materialRenderers,
  DroppableHorizontalLayoutRegistration,
  DroppableVerticalLayoutRegistration,
  DroppableElementRegistration,
  DroppableGroupLayoutRegistration,
  DroppableArrayControlRegistration,
];
