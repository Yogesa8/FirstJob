import React, { useEffect, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import {
    Bold, Italic, UnderlineIcon, List, ListOrdered,
    TextAlignStart, TextAlignCenter, TextAlignEnd, TextAlignJustify,
} from 'lucide-react'

function RichTextArea({ value = '', onChange }) {
    const [, forceUpdate] = useState(0)

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({
                types: ['paragraph', 'heading'],
            }),
        ],
        content: value, 
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML()) 
        }
    })

    useEffect(() => {
        if (!editor) return

        const update = () => forceUpdate(v => v + 1)

        editor.on('selectionUpdate', update)
        editor.on('transaction', update)

        return () => {
            editor.off('selectionUpdate', update)
            editor.off('transaction', update)
        }
    }, [editor])

    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value)
        }
    }, [value, editor])

    if (!editor) return null

    const preventFocusLoss = e => e.preventDefault()

    return (
        <div className="rte-container">
            <div className="rte-toolbar">
                <ToolbarButton
                    active={editor.isActive('bold')}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    onMouseDown={preventFocusLoss}
                >
                    <Bold size={18} />
                </ToolbarButton>

                <ToolbarButton
                    active={editor.isActive('italic')}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    onMouseDown={preventFocusLoss}
                >
                    <Italic size={18} />
                </ToolbarButton>

                <ToolbarButton
                    active={editor.isActive('underline')}
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    onMouseDown={preventFocusLoss}
                >
                    <UnderlineIcon size={18} />
                </ToolbarButton>
        
                <Divider />

                <ToolbarButton
                    active={editor.isActive({ textAlign: 'left' })}
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    onMouseDown={preventFocusLoss}
                >
                    <TextAlignStart size={18} />
                </ToolbarButton>

                <ToolbarButton
                    active={editor.isActive({ textAlign: 'center' })}
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    onMouseDown={preventFocusLoss}
                >
                    <TextAlignCenter size={18} />
                </ToolbarButton>

                <ToolbarButton
                    active={editor.isActive({ textAlign: 'right' })}
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    onMouseDown={preventFocusLoss}
                >
                    <TextAlignEnd size={18} />
                </ToolbarButton>

                <ToolbarButton
                    active={editor.isActive({ textAlign: 'justify' })}
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    onMouseDown={preventFocusLoss}
                >
                    <TextAlignJustify size={18} />
                </ToolbarButton>

                <Divider />

                <ToolbarButton
                    active={editor.isActive('bulletList')}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    onMouseDown={preventFocusLoss}
                >
                    <List size={18} />
                </ToolbarButton>

                <ToolbarButton
                    active={editor.isActive('orderedList')}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    onMouseDown={preventFocusLoss}
                >
                    <ListOrdered size={18} />
                </ToolbarButton>
            </div>

            <EditorContent editor={editor} className="rte-editor" />
        </div>
    )
}

function ToolbarButton({ active, children, ...props }) {
    return (
        <button
            {...props}
            className={`rte-btn ${active ? 'active' : ''}`}
        >
            {children}
        </button>
    )
}

function Divider() {
    return <span className="rte-divider" />
}

export default RichTextArea