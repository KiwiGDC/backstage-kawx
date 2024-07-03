import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import ansibleConfig from '../../ansibleConfig';
import { Config } from '@backstage/config';
import { AnsibleApi, Job, JobTemplate } from 'knode-awx'
/**
 * Creates an `acme:example` Scaffolder action.
 *
 * @remarks
 *
 * See {@link https://example.com} for more information.
 *
 * @public
 */
export function createJobTemplateLaunchAction(config: Config) {
  // For more information on how to define custom actions, see
  //   https://backstage.io/docs/features/software-templates/writing-custom-actions
  return createTemplateAction<{
    jobTemplateId: number;
  }>({
    id: 'ansible:jobTemplate:launch',
    description: 'Run an Ansible job and wait for it to complete',
    schema: {
      input: ansibleConfig,
      output: {
        type: 'object',
        properties: {
          job: {
            title: 'Job',
            description: 'Information for the job ',
            type: Job,
          }
        },
      }
    },
    async handler(ctx) {

      const tokenAnsible = config.getConfig("ansible").getString("token")
      const urlAnsible = config.getConfig("ansible").getString("url")

      const { jobTemplateId } = ctx.input;

      ctx.logger.info(`Running ansible template job with id: ${jobTemplateId}`);

      new AnsibleApi(urlAnsible, {token: tokenAnsible})

      const job = await (await JobTemplate.get(jobTemplateId)).launch()
      await job.wait();

      const finalJob = await Job.get(job.job.id)

      ctx.logger.info(`Running finish with status : ${finalJob.job.status}`);

      ctx.output('job', finalJob.job)


    },
  });
}
