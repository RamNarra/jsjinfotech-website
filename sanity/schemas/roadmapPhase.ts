/** Mirrors RoadmapPhase in web/src/shared/types.ts. Milestones come from the corporate profile roadmap table. */
export default {
  name: 'roadmapPhase',
  title: '2030 roadmap phase',
  type: 'document',
  fields: [
    { name: 'phaseNumber', title: 'Phase number (e.g. 01)', type: 'string' },
    { name: 'name', title: 'Phase name', type: 'string' },
    { name: 'summary', title: 'Summary', type: 'text', rows: 2 },
    {
      name: 'items',
      title: 'Milestones by vertical',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'vertical', title: 'Vertical', type: 'string' },
            { name: 'milestone', title: 'Milestone', type: 'string' },
          ],
        },
      ],
    },
  ],
};
