
const ansibleConfig =  {
        type: 'object',
        required: ['jobTemplateId'],
        properties: {
          jobTemplateId: {
            title: 'Job Template ID',
            description: 'The ID of the job template to run',
            type: 'number',
          },
        },
      };

export default ansibleConfig;

export const ansibleConfigExample = {
  url: 'ansible.server.com',
  token: '${{ secrets.ANSIBLE_TOKEN }}',
};

export enum STATUS {
  NEW = 'new',
  RUNNING = 'running',
  FAILED = 'failed',
  SUCCESS = 'successful',
  TIMEOUT = 'timeout'
}