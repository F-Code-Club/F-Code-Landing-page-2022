import { ContentState, EditorState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

const HTMLToEditorState = (html) => {
    return EditorState.createWithContent(
        ContentState.createFromBlockArray(htmlToDraft(JSON.parse(html)).contentBlocks)
    );
};

export { HTMLToEditorState };
