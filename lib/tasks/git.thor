# --------------------------------------------------------
# Simplifies common GIT commands across the multiple sub-modules
#
# Commands:
#   $ thor list
#
# --------------------------------------------------------

class Git < Thor
  OPEN_CORE = "open.core"
  OPEN_CORE_DEV = "open.core.dev"

  desc "pull", "Pulls from the root development repository and also pulls all sub-modules"

  def pull
    write_title "GIT PULL"
    current_dir = Dir.pwd

    pull_repo Git::OPEN_CORE, open_core_path(current_dir)
    pull_repo Git::OPEN_CORE_DEV, current_dir

    reset_dir(current_dir)
  end

  desc "commit", "Adds everything to Git and commits the both the 'core' and 'core_dev' repositories"

  def commit(message)
    write_title "COMMIT"
    current_dir = Dir.pwd

    commit_repo Git::OPEN_CORE, message, open_core_path(current_dir)
    commit_repo Git::OPEN_CORE_DEV, message, current_dir

    reset_dir(current_dir)
  end

  desc "push", "Pushes the repository and all sub-modules to GitHub"

  def push
    write_title "GIT PUSH"
    current_dir = Dir.pwd

    push_repo Git::OPEN_CORE, open_core_path(current_dir)
    push_repo Git::OPEN_CORE_DEV, current_dir

    reset_dir(current_dir)
  end


  desc "cpush", "Commit current changes and pushes all repositories to GitHub"
  def cpush(message)
    commit message
    push
  end

  desc "status", "Provides status for all repositories"

  def status
    write_title "GIT STATUS"
    current_dir = Dir.pwd

    repo_status Git::OPEN_CORE, open_core_path(current_dir)
    repo_status Git::OPEN_CORE_DEV, current_dir

    puts ""
    reset_dir(current_dir)
  end

  private

  def pull_repo(title, path)
    system("
          echo '+ Pulling '#{title}' repository: #{path}'
          cd #{path}
          git checkout master
          git pull
          echo
          ")
  end


  def commit_repo(title, message, path)
    system("
            echo '+ Committing to repository '#{title}' repository: #{path}'
            cd #{path}
            git add .
            git add -u
            git commit -m '#{message}'
            echo
           ")
  end


  def push_repo(title, path)
    system("
          echo '+ Pushing '#{title}' repository'
          cd #{path}
          git push
          echo
          ")
  end


  def repo_status(title, path)
    puts "REPOSITORY: #{title}"
    system("
          cd #{path}
          git status
          ")
    write_div
  end


  def js_path(current_dir)
    "#{current_dir}/public/javascripts"
  end

  def open_core_path(current_dir)
    "#{js_path(current_dir)}/open.core"
  end


  def reset_dir(current_dir)
    system("cd #{current_dir}")
  end

  def write_title(message)
    write_div
    puts "   #{message}"
    write_div
  end

  def write_div(length = 60)
    puts "-" * length

  end
end