export default {
  name: 'roadmapPhase',
  title: '2030 Roadmap Phase',
  type: 'document',
  fields: [
    { name: 'phaseNumber', title: 'Phase Number (e.g. 01)', type: 'string' },
    { name: 'name', title: 'Phase Name', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    {
      name: 'milestones',
      title: 'Key Milestones',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
