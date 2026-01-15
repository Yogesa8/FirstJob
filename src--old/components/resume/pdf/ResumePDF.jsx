import { Page, Text, View, Document, StyleSheet, Svg, Path, Font } from '@react-pdf/renderer';

// Register a serif font (using standard Times-Roman as fallback often works, but let's stick to standard fonts for safety)
// For safe PDF generation across OS, separate style objects are best.

// --- STYLES FOR TEMPLATE 1 (Original) ---
const styles1 = StyleSheet.create({
    page: { flexDirection: 'column', backgroundColor: '#fff', padding: 30, fontFamily: 'Helvetica' },
    header: { borderBottomWidth: 2, borderBottomColor: '#1f2937', paddingBottom: 20, marginBottom: 20 },
    name: { fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase', color: '#111827', marginBottom: 8 },
    role: { fontSize: 14, color: '#4b5563', marginBottom: 12 },
    contactRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 15 },
    contactItem: { flexDirection: 'row', alignItems: 'center', fontSize: 10, color: '#4b5563', gap: 4 },
    section: { marginBottom: 15 },
    sectionTitle: { fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', borderBottomWidth: 1, borderBottomColor: '#d1d5db', marginBottom: 10, paddingBottom: 4, letterSpacing: 1 },
    summaryText: { fontSize: 10, color: '#374151', textAlign: 'justify', lineHeight: 1.5 },
    expItem: { marginBottom: 12 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    expRole: { fontSize: 11, fontWeight: 'bold', color: '#111827' },
    expDuration: { fontSize: 10, color: '#4b5563' },
    expCompany: { fontSize: 10, color: '#374151', marginBottom: 4, fontStyle: 'italic' },
    expDesc: { fontSize: 10, color: '#4b5563', lineHeight: 1.4 },
    row: { flexDirection: 'row', gap: 20 },
    col8: { width: '66%' },
    col4: { width: '33%' },
    eduItem: { marginBottom: 8 },
    eduSchool: { fontSize: 11, fontWeight: 'bold', color: '#111827' },
    eduYear: { fontSize: 10, color: '#4b5563' },
    eduDegree: { fontSize: 10, color: '#374151' },
    skillsParams: { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
    skillBadge: { backgroundColor: '#f3f4f6', paddingVertical: 4, paddingHorizontal: 8, fontSize: 8, color: '#374151', borderRadius: 4 }
});

// --- STYLES FOR TEMPLATE 2 (Modern Minimal) ---
const styles2 = StyleSheet.create({
    page: { flexDirection: 'column', backgroundColor: '#fff', padding: 40, fontFamily: 'Helvetica' },
    header: { marginBottom: 20 },
    name: { fontSize: 28, fontWeight: 'bold', color: '#111827', marginBottom: 4 },
    role: { fontSize: 14, color: '#2563eb', marginBottom: 10, fontWeight: 'medium' }, // Blue accent
    contactRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, fontSize: 9, color: '#4b5563' },
    contactItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
    section: { marginBottom: 18 },
    sectionTitle: { fontSize: 11, fontWeight: 'bold', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 8, letterSpacing: 1.5 },
    contentDefault: { fontSize: 10, color: '#374151', lineHeight: 1.5 },
    expItem: { marginBottom: 12 },
    expRole: { fontSize: 12, fontWeight: 'bold', color: '#111827' },
    expCompany: { fontSize: 10, color: '#2563eb', marginBottom: 2, fontWeight: 'medium' },
    row: { flexDirection: 'row', gap: 30 },
    colMain: { width: '60%' },
    colSide: { width: '40%' },
    skillBadge: { border: '1px solid #e5e7eb', padding: '3 6', fontSize: 9, color: '#374151', borderRadius: 2, marginRight: 4, marginBottom: 4 }
});

// --- STYLES FOR TEMPLATE 3 (Classic Serif) ---
const styles3 = StyleSheet.create({
    page: { flexDirection: 'column', backgroundColor: '#fff', padding: 40, fontFamily: 'Times-Roman' },
    header: { marginBottom: 25, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#d1d5db', alignItems: 'center' },
    name: { fontSize: 26, fontWeight: 'bold', color: '#111827', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 },
    role: { fontSize: 14, color: '#4b5563', marginBottom: 10, fontStyle: 'italic' },
    contactRow: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: 15, fontSize: 9, color: '#4b5563' },
    contactItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
    section: { marginBottom: 20 },
    sectionTitle: { fontSize: 11, fontWeight: 'bold', textTransform: 'uppercase', color: '#1f2937', marginBottom: 10, paddingBottom: 2, borderBottomWidth: 1, borderBottomColor: '#e5e7eb', letterSpacing: 1, textAlign: 'center' },
    contentDefault: { fontSize: 10, color: '#374151', lineHeight: 1.6, textAlign: 'justify' },
    expItem: { marginBottom: 15 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2, alignItems: 'center' },
    expCompany: { fontSize: 12, fontWeight: 'bold', color: '#111827' },
    expRole: { fontSize: 11, fontStyle: 'italic', color: '#374151' },
    date: { fontSize: 9, color: '#6b7280' },
    eduItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8, borderBottomWidth: 1, borderBottomColor: '#f3f4f6', paddingBottom: 4 },
    skillText: { fontSize: 10, marginRight: 10, color: '#374151' }
});

// --- STYLES FOR TEMPLATE 4 (Sidebar) ---
const styles4 = StyleSheet.create({
    page: { flexDirection: 'row', backgroundColor: '#fff', fontFamily: 'Helvetica' },
    sidebar: { width: '33%', backgroundColor: '#111827', padding: 20, color: '#fff', height: '100%' },
    main: { width: '67%', padding: 30, backgroundColor: '#fff' },
    sidebarHeader: { alignItems: 'center', marginBottom: 20 },
    avatarPlaceholder: { width: 60, height: 60, backgroundColor: '#374151', borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
    avatarText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
    sideName: { fontSize: 18, fontWeight: 'bold', color: '#fff', textAlign: 'center', textTransform: 'uppercase', marginBottom: 5 },
    sideRole: { fontSize: 10, color: '#9ca3af', textAlign: 'center' },
    sideSection: { marginBottom: 20 },
    sideTitle: { fontSize: 10, fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', borderBottomWidth: 1, borderBottomColor: '#374151', paddingBottom: 4, marginBottom: 8 },
    sideText: { fontSize: 9, color: '#d1d5db', marginBottom: 4 },
    contactItem: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
    tag: { backgroundColor: '#1f2937', padding: '4 8', borderRadius: 4, marginBottom: 4, marginRight: 4, alignSelf: 'flex-start' },
    tagText: { color: '#d1d5db', fontSize: 8 },

    mainSection: { marginBottom: 20 },
    mainTitle: { fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', color: '#111827', borderBottomWidth: 2, borderBottomColor: '#111827', paddingBottom: 4, marginBottom: 12 },
    mainExpItem: { marginBottom: 15 },
    mainExpRole: { fontSize: 12, fontWeight: 'bold', color: '#111827' },
    mainExpCompany: { fontSize: 10, fontWeight: 'medium', color: '#4b5563', marginBottom: 4 },
    mainDesc: { fontSize: 10, color: '#374151', lineHeight: 1.5 }
});

const Icons = {
    Mail: ({ color = "#4b5563" }) => (
        <Svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <Path d="m22 6-10 7L2 6" />
        </Svg>
    ),
    Phone: ({ color = "#4b5563" }) => (
        <Svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </Svg>
    ),
    Linkedin: ({ color = "#4b5563" }) => (
        <Svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <Path d="M2 9h4v12H2z" />
            <Path d="M2 4a2 2 0 1 1 2.01 2A2 2 0 0 1 2 4" />
        </Svg>
    ),
    Globe: ({ color = "#4b5563" }) => (
        <Svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20" />
            <Path d="M2 12h20" />
        </Svg>
    ),
    MapPin: ({ color = "#4b5563" }) => (
        <Svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <Path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </Svg>
    )
};

const TemplateView1 = ({ data }) => {
    const { personal, education, experience, skills } = data;
    return (
        <Page size="A4" style={styles1.page}>
            <View style={styles1.header}>
                <Text style={styles1.name}>{personal.fullName || 'YOUR NAME'}</Text>
                <Text style={styles1.role}>{personal.role || 'Professional Role'}</Text>
                <View style={styles1.contactRow}>
                    {personal.email && <View style={styles1.contactItem}><Icons.Mail /><Text>{personal.email}</Text></View>}
                    {personal.phone && <View style={styles1.contactItem}><Icons.Phone /><Text>{personal.phone}</Text></View>}
                    {personal.linkedin && <View style={styles1.contactItem}><Icons.Linkedin /><Text>{personal.linkedin}</Text></View>}
                    {personal.location && <View style={styles1.contactItem}><Icons.MapPin /><Text>{personal.location}</Text></View>}
                    {personal.website && <View style={styles1.contactItem}><Icons.Globe /><Text>{personal.website}</Text></View>}
                </View>
            </View>
            {personal.summary && <View style={styles1.section}><Text style={styles1.sectionTitle}>Professional Summary</Text><Text style={styles1.summaryText}>dangerouslySetInnerHTML={{ __html: personal.summary }}</Text></View>}
            {experience.length > 0 && <View style={styles1.section}><Text style={styles1.sectionTitle}>Experience</Text>{experience.map((exp, i) => (<View key={i} style={styles1.expItem}><View style={styles1.expHeader}><Text style={styles1.expRole}>{exp.role}</Text><Text style={styles1.expDuration}>{exp.duration}</Text></View><Text style={styles1.expCompany}>{exp.company}</Text><Text style={styles1.expDesc}>{exp.description}</Text></View>))}</View>}
            <View style={styles1.row}>
                {education.length > 0 && <View style={skills.length > 0 ? styles1.col8 : { width: '100%' }}><View style={styles1.section}><Text style={styles1.sectionTitle}>Education</Text>{education.map((edu, i) => (<View key={i} style={styles1.eduItem}><View style={styles1.expHeader}><Text style={styles1.eduSchool}>{edu.school}</Text><Text style={styles1.eduYear}>{edu.year}</Text></View><Text style={styles1.eduDegree}>{edu.degree}</Text></View>))}</View></View>}
                {skills.length > 0 && <View style={education.length > 0 ? styles1.col4 : { width: '100%' }}><View style={styles1.section}><Text style={styles1.sectionTitle}>Skills</Text><View style={styles1.skillsParams}>{skills.map((skill, i) => (<Text key={i} style={styles1.skillBadge}>{skill}</Text>))}</View></View></View>}
            </View>
        </Page>
    );
};

const TemplateView2 = ({ data }) => {
    const { personal, education, experience, skills } = data;
    return (
        <Page size="A4" style={styles2.page}>
            <View style={styles2.header}>
                <Text style={styles2.name}>{personal.fullName || 'YOUR NAME'}</Text>
                <Text style={styles2.role}>{personal.role || 'Professional Role'}</Text>
                <View style={styles2.contactRow}>
                    {personal.email && <View style={styles2.contactItem}><Icons.Mail /><Text>{personal.email}</Text></View>}
                    {personal.phone && <View style={styles2.contactItem}><Icons.Phone /><Text>{personal.phone}</Text></View>}
                    {personal.linkedin && <View style={styles2.contactItem}><Icons.Linkedin /><Text>{personal.linkedin}</Text></View>}
                    {personal.location && <View style={styles2.contactItem}><Icons.MapPin /><Text>{personal.location}</Text></View>}
                </View>
            </View>

            {personal.summary && <View style={styles2.section}><Text style={styles2.sectionTitle}>Summary</Text><Text style={styles2.contentDefault}>{personal.summary}</Text></View>}

            {experience.length > 0 && <View style={styles2.section}><Text style={styles2.sectionTitle}>Experience</Text>{experience.map((exp, i) => (<View key={i} style={styles2.expItem}><View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={styles2.expRole}>{exp.role}</Text><Text style={{ fontSize: 10, color: '#6b7280' }}>{exp.duration}</Text></View><Text style={styles2.expCompany}>{exp.company}</Text><Text style={styles2.contentDefault}>{exp.description}</Text></View>))}</View>}

            <View style={styles2.row}>
                {education.length > 0 && <View style={skills.length > 0 ? styles2.colMain : { width: '100%' }}><View style={styles2.section}><Text style={styles2.sectionTitle}>Education</Text>{education.map((edu, i) => (<View key={i} style={{ marginBottom: 8 }}><Text style={{ fontSize: 11, fontWeight: 'bold' }}>{edu.school}</Text><Text style={{ fontSize: 10, color: '#374151' }}>{edu.degree}</Text><Text style={{ fontSize: 10, color: '#6b7280' }}>{edu.year}</Text></View>))}</View></View>}
                {skills.length > 0 && <View style={education.length > 0 ? styles2.colSide : { width: '100%' }}><View style={styles2.section}><Text style={styles2.sectionTitle}>Skills</Text><View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{skills.map((skill, i) => (<Text key={i} style={styles2.skillBadge}>{skill}</Text>))}</View></View></View>}
            </View>
        </Page>
    );
};

const TemplateView3 = ({ data }) => {
    const { personal, education, experience, skills } = data;
    return (
        <Page size="A4" style={styles3.page}>
            <View style={styles3.header}>
                <Text style={styles3.name}>{personal.fullName || 'YOUR NAME'}</Text>
                <Text style={styles3.role}>{personal.role || 'Professional Role'}</Text>
                <View style={styles3.contactRow}>
                    {personal.email && <View style={styles3.contactItem}><Icons.Mail /><Text>{personal.email}</Text></View>}
                    {personal.phone && <View style={styles3.contactItem}><Icons.Phone /><Text>{personal.phone}</Text></View>}
                    {personal.linkedin && <View style={styles3.contactItem}><Icons.Linkedin /><Text>{personal.linkedin}</Text></View>}
                </View>
            </View>
            {personal.summary && <View style={styles3.section}><Text style={styles3.sectionTitle}>Summary</Text><Text style={styles3.contentDefault}>{personal.summary}</Text></View>}
            {experience.length > 0 && <View style={styles3.section}><Text style={styles3.sectionTitle}>Experience</Text>{experience.map((exp, i) => (<View key={i} style={styles3.expItem}><View style={styles3.expHeader}><Text style={styles3.expCompany}>{exp.company}</Text><Text style={styles3.date}>{exp.duration}</Text></View><Text style={styles3.expRole}>{exp.role}</Text><Text style={styles3.contentDefault}>{exp.description}</Text></View>))}</View>}
            {education.length > 0 && <View style={styles3.section}><Text style={styles3.sectionTitle}>Education</Text>{education.map((edu, i) => (<View key={i} style={styles3.eduItem}><View><Text style={{ fontWeight: 'bold', fontSize: 11 }}>{edu.school}</Text><Text style={{ fontStyle: 'italic', fontSize: 10 }}>{edu.degree}</Text></View><Text style={styles3.date}>{edu.year}</Text></View>))}</View>}
            {skills.length > 0 && <View style={styles3.section}><Text style={styles3.sectionTitle}>Skills</Text><View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>{skills.map((skill, i) => (<Text key={i} style={styles3.skillText}>• {skill}</Text>))}</View></View>}
        </Page>
    );
};

const TemplateView4 = ({ data }) => {
    const { personal, education, experience, skills } = data;
    return (
        <Page size="A4" style={styles4.page}>
            <View style={styles4.sidebar}>
                <View style={styles4.sidebarHeader}>
                    <View style={styles4.avatarPlaceholder}><Text style={styles4.avatarText}>{personal.fullName ? personal.fullName.substring(0, 2).toUpperCase() : 'ME'}</Text></View>
                    <Text style={styles4.sideName}>{personal.fullName || 'Your Name'}</Text>
                    <Text style={styles4.sideRole}>{personal.role || 'Role'}</Text>
                </View>
                <View style={styles4.sideSection}>
                    <Text style={styles4.sideTitle}>Contact</Text>
                    {personal.email && <View style={styles4.contactItem}><Icons.Mail color="#d1d5db" /><Text style={styles4.sideText}>{personal.email}</Text></View>}
                    {personal.phone && <View style={styles4.contactItem}><Icons.Phone color="#d1d5db" /><Text style={styles4.sideText}>{personal.phone}</Text></View>}
                    {personal.linkedin && <View style={styles4.contactItem}><Icons.Linkedin color="#d1d5db" /><Text style={styles4.sideText}>{personal.linkedin}</Text></View>}
                    {personal.location && <View style={styles4.contactItem}><Icons.MapPin color="#d1d5db" /><Text style={styles4.sideText}>{personal.location}</Text></View>}
                </View>
                {skills.length > 0 && <View style={styles4.sideSection}><Text style={styles4.sideTitle}>Skills</Text><View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{skills.map((skill, i) => (<View key={i} style={styles4.tag}><Text style={styles4.tagText}>{skill}</Text></View>))}</View></View>}
                {education.length > 0 && <View style={styles4.sideSection}><Text style={styles4.sideTitle}>Education</Text>{education.map((edu, i) => (<View key={i} style={{ marginBottom: 8 }}><Text style={{ fontWeight: 'bold', fontSize: 10, color: '#fff' }}>{edu.school}</Text><Text style={{ fontSize: 9, color: '#9ca3af' }}>{edu.degree}</Text><Text style={{ fontSize: 9, color: '#6b7280' }}>{edu.year}</Text></View>))}</View>}
            </View>
            <View style={styles4.main}>
                {personal.summary && <View style={styles4.mainSection}><Text style={styles4.mainTitle}>Profile</Text><Text style={styles4.mainDesc}>{personal.summary}</Text></View>}
                {experience.length > 0 && <View style={styles4.mainSection}><Text style={styles4.mainTitle}>Experience</Text>{experience.map((exp, i) => (<View key={i} style={styles4.mainExpItem}><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}><Text style={styles4.mainExpRole}>{exp.role}</Text><Text style={{ fontSize: 10, fontWeight: 'bold', color: '#6b7280' }}>{exp.duration}</Text></View><Text style={styles4.mainExpCompany}>{exp.company}</Text><Text style={styles4.mainDesc}>{exp.description}</Text></View>))}</View>}
            </View>
        </Page>
    );
};


const ResumePDF = ({ data, selectedTemplate = 'template1' }) => {
    return (
        <Document>
            {selectedTemplate === 'template1' && <TemplateView1 data={data} />}
            {selectedTemplate === 'template2' && <TemplateView2 data={data} />}
            {selectedTemplate === 'template3' && <TemplateView3 data={data} />}
            {selectedTemplate === 'template4' && <TemplateView4 data={data} />}
        </Document>
    );
};

export default ResumePDF;
