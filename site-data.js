window.defaultSiteData = {
    brandName: 'theres13letters Setup Utility',
    titleScrollText: 'helloimkaiser // theres13letters ',
    pages: {
        index: {
            sectionTitle: 'Subsection Navigation',
            helpText: 'Use the keyboard Up/Down arrows or hover with your mouse to select a section. Press Enter to open it.',
            items: [
                {label: 'Links', url: 'links.html', help: 'Open the Links subsection.'},
                {label: 'Recent Works', url: 'recent-works.html', help: 'Open the Recent Works subsection.'},
                {label: 'About Me', url: 'about.html', help: 'Open the About Me subsection.'},
                {label: 'Hobbies', url: 'hobbies.html', help: 'Open the Hobbies subsection.'}
            ],
            navItems: []
        },
        links: {
            sectionTitle: 'External Boot Links',
            helpText: 'Use the keyboard Up/Down arrows or hover with your mouse to select a link. Press Enter or click to open it.',
            items: [
                {label: 'YouTube Channel', url: 'https://youtube.com/@1stkaiser', external: true, help: 'Open the YouTube channel.'},
                {label: 'Instagram Portfolio', url: 'https://www.instagram.com/kaiser_mp4/', external: true, help: 'Open the Instagram profile.'},
                {label: 'Twitter / X', url: 'https://twitter.com/kaiservfx', external: true, help: 'Open the Twitter / X feed.'},
                {label: 'Port', url: 'https://about:blank', external: true, help: 'Open the portfolio shortcut link.'},
                {label: 'hello@imkaiser.com', url: 'mailto:hello@imkaiser.com', help: 'Open your email client to contact me.'}
            ],
            navItems: [{label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}]
        },
        recentWorks: {
            sectionTitle: 'Recent Works',
            helpText: 'Select a work item to view its media, process, and tools used. Use Enter or click to open a detail page.',
            items: [
                {title: 'Realtime Editing Demo', body: 'A workflow showcase combining motion graphics, title animation and live edit sequencing.', url: 'recent-works-realtime.html', help: 'Open the realtime editing demo detail page.'},
                {title: 'Short Film Visual FX Reel', body: 'A curated reel of recent visual effects, compositing, and scene enhancement work.', url: 'recent-works-vfx.html', help: 'Open the short film visual FX reel detail page.'},
                {title: 'Type & Interface Exploration', body: 'A hardware-inspired interface exploration with pixel typography and BIOS-style layout design.', url: 'recent-works-ui.html', help: 'Open the type and interface exploration detail page.'}
            ],
            navItems: [{label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}]
        },
        about: {
            sectionTitle: 'About Me',
            helpText: 'Read the About Me summary. Press Enter to return to the main menu.',
            items: [
                {title: 'Identity', body: 'A creative technologist blending editorial design, motion, and keyboard-first interface thinking.'},
                {title: 'Approach', body: 'I prefer stripped-back, functional layouts with a strong retro-tech personality and crisp typographic hierarchy.'},
                {title: 'Favorite Tools', body: 'Text editors, custom keyboard workflows, CSS, and small scripts that make navigation feel precise.'}
            ],
            navItems: [{label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}]
        },
        hobbies: {
            sectionTitle: 'Hobbies Subsections',
            helpText: 'Select a hobbies subsection to view its content. Use Enter or click to open a page.',
            items: [
                {title: 'Keyboards & Reviews', body: 'Hardware reviews, new builds, and keyboard-related exploration with the same BIOS-style clarity.', url: 'hobbies-keyboards-reviews.html', help: 'Open the Keyboards & Reviews subsection.'},
                {title: 'Keyboard Switches', body: 'Switch testing, tactile profiles, and comparisons for the mechanical keyboard community.', url: 'hobbies-switches.html', help: 'Open the Keyboard Switches subsection.'},
                {title: 'Personal', body: 'Personal notes, daily workflows, and creative habits behind the work.', url: 'hobbies-personal.html', help: 'Open the Personal subsection.'},
                {title: 'Miscellaneous', body: 'Side projects, tools, and interesting experiments that don\'t fit into the main categories.', url: 'hobbies-misc.html', help: 'Open the Miscellaneous subsection.'}
            ],
            navItems: [{label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}]
        },
        hobbiesKeyboardsReviews: {
            sectionTitle: 'Keyboards & Reviews',
            helpText: 'Use this page to log keyboard-related projects and review notes.',
            items: [
                {title: 'Build Notes', body: 'Document recent builds, polycarbonate plates, and firmware choices in concise review form.'},
                {title: 'Review Highlights', body: 'Capture the most useful takeaways from new keyboards and peripherals.'}
            ],
            navItems: [
                {label: 'Back to Hobbies Menu', url: 'hobbies.html', help: 'Return to the hobbies menu.'},
                {label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}
            ]
        },
        hobbiesSwitches: {
            sectionTitle: 'Keyboard Switches',
            helpText: 'Track and compare mechanical switches here for future reference.',
            items: [
                {title: 'Switch Types', body: 'Track travel, force, and sound profile details for switches under test.'},
                {title: 'Switch Combos', body: 'Record preferred combinations for different layouts and typing styles.'}
            ],
            navItems: [
                {label: 'Back to Hobbies Menu', url: 'hobbies.html', help: 'Return to the hobbies menu.'},
                {label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}
            ]
        },
        hobbiesPersonal: {
            sectionTitle: 'Personal',
            helpText: 'Write short personal notes or habits related to your creative and technical workflow.',
            items: [
                {title: 'Daily Workflow', body: 'Notes on writing, keyboard layouts, and how you organize creative sessions.'},
                {title: 'Creative Habits', body: 'Personal strategies for maintaining focus and avoiding unnecessary design clutter.'}
            ],
            navItems: [
                {label: 'Back to Hobbies Menu', url: 'hobbies.html', help: 'Return to the hobbies menu.'},
                {label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}
            ]
        },
        hobbiesMisc: {
            sectionTitle: 'Miscellaneous',
            helpText: 'Log experimental tools and miscellaneous notes here for later review.',
            items: [
                {title: 'Tool Experiments', body: 'Collect notes on utilities, scripts, and tools you experiment with in your workflow.'},
                {title: 'Side Projects', body: 'Record miscellaneous side projects that are outside the main creative categories.'}
            ],
            navItems: [
                {label: 'Back to Hobbies Menu', url: 'hobbies.html', help: 'Return to the hobbies menu.'},
                {label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}
            ]
        },
        recentWorksRealtime: {
            sectionTitle: 'Realtime Editing Demo',
            helpText: 'View the media, process, and tools used for this project.',
            items: [
                {title: 'Media', body: 'YouTube demo: Watch here', externalUrl: 'https://www.youtube.com/'},
                {title: 'Process', body: 'Built an editing template, refined motion timing, layered titles, and iterated in small passes to keep the sequence tight.'},
                {title: 'Tools Used', body: 'Used Premiere Pro for editing, After Effects for motion elements, and hand-tuned typography in CSS-inspired layouts.'}
            ],
            navItems: [
                {label: 'Back to Recent Works', url: 'recent-works.html', help: 'Return to the Recent Works menu.'},
                {label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}
            ]
        },
        recentWorksVfx: {
            sectionTitle: 'Short Film Visual FX Reel',
            helpText: 'View the media, process, and tools used for this visual FX project.',
            items: [
                {title: 'Media', body: 'YouTube reel: Watch here', externalUrl: 'https://www.youtube.com/'},
                {title: 'Process', body: 'Reviewed footage, prepared plates, composited CG elements, and polished with color grading and final effects passes.'},
                {title: 'Tools Used', body: 'Used After Effects, Nuke, Premiere Pro, and custom motion templates to assemble the reel.'}
            ],
            navItems: [
                {label: 'Back to Recent Works', url: 'recent-works.html', help: 'Return to the Recent Works menu.'},
                {label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}
            ]
        },
        recentWorksUi: {
            sectionTitle: 'Type & Interface Exploration',
            helpText: 'View the media, process, and tools for this interface exploration.',
            items: [
                {title: 'Media', body: 'Gallery preview: Open visuals'},
                {title: 'Process', body: 'Designed pixel-inspired layouts, tested typography scales, and iterated the visual rhythm to maintain a strong system-like structure.'},
                {title: 'Tools Used', body: 'Used Figma for layout experimentation, CSS simulations for BIOS textures, and quick render previews.'}
            ],
            navItems: [
                {label: 'Back to Recent Works', url: 'recent-works.html', help: 'Return to the Recent Works menu.'},
                {label: 'Back to Main Menu', url: 'index.html', help: 'Return to the main menu.'}
            ]
        }
    }
};
