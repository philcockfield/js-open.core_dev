# --------------------------------------------------------
# Simplifies common GIT commands across the multiple sub-modules
#
# Commands:
#   $ thor list
#
# --------------------------------------------------------

class Git < Thor
  desc "pull", "Pulls from the root development repository and also pulls all sub-modules"

  def pull
    current_dir = Dir.pwd
    js = js_path(current_dir)

    pull_repository "open.core", "#{js}/open.core"
    pull_repository "open.core_dev", current_dir

    reset_dir(current_dir)
  end

  desc "commit", "Adds everything to Git and commits the both the 'core' and 'core_dev' repositories"

  def commit(message)
    current_dir = Dir.pwd

    commit_repository "open.core sub-module", message, "#{js_path(current_dir)}/open.core"
    commit_repository "open.core_dev", message, current_dir

    reset_dir(current_dir)
  end

  desc "push", "Pushes the repository and all sub-modules to GitHub"

  def push()
    current_dir = Dir.pwd

    push_repository "open.core", "#{js_path(current_dir)}/open.core"
    push_repository "open.core_dev", current_dir
  end


  private

  def pull_repository(title, path)
    system("
          echo '+ Pulling '#{title}' repository: #{path}'
          cd #{path}
          git checkout master
          git pull
          echo
          ")
  end


  def commit_repository(title, message, path)
    system("
            echo '+ Committing to repository '#{title}' repository: #{path}'
            cd #{path}
            git add .
            git add -u
            git commit -m '#{message}'
            echo
           ")
  end


  def push_repository(title, path)
    system("
          echo '+ Pushing '#{title}' repository'
          cd #{path}
          git push
          echo
          ")
  end


  def js_path(current_dir)
    "#{current_dir}/public/javascripts"
  end


  def reset_dir(current_dir)
    system("cd #{current_dir}")
  end
end