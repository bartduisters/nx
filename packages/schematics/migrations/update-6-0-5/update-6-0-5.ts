import {
  Rule,
  Tree,
  SchematicContext,
  chain
} from '@angular-devkit/schematics';
import { updateJsonInTree } from '../../src/utils/ast-utils';

export default function(): Rule {
  return updateJsonInTree('package.json', packageJson => {
    packageJson.scripts['affected:lint'] =
      './node_modules/.bin/nx affected:lint';
    return packageJson;
  });
}
