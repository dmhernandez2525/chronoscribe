"""
ChronoScribe CLI - Command-line interface using Click and Rich.

This module provides the main CLI entry point and registers all commands.
"""

import click
from rich.console import Console

console = Console()


@click.group()
@click.version_option(package_name="chronoscribe")
@click.option(
    "--config",
    "-c",
    type=click.Path(),
    envvar="CHRONOSCRIBE_CONFIG",
    help="Path to config file",
)
@click.option("--verbose", "-v", is_flag=True, help="Enable verbose output")
@click.pass_context
def cli(ctx: click.Context, config: str | None, verbose: bool) -> None:
    """ChronoScribe - Transform handwritten documents into searchable archives."""
    ctx.ensure_object(dict)
    ctx.obj["config_path"] = config
    ctx.obj["verbose"] = verbose
    ctx.obj["console"] = console


@cli.command()
@click.option(
    "--path",
    "-p",
    default="~/ChronoScribe",
    help="Installation path (default: ~/ChronoScribe)",
)
@click.pass_context
def init(ctx: click.Context, path: str) -> None:
    """Initialize ChronoScribe directory structure and configuration."""
    console = ctx.obj["console"]
    console.print("[yellow]init command not yet implemented[/yellow]")


@cli.command()
@click.option("--daemon", "-d", is_flag=True, help="Run in background")
@click.pass_context
def watch(ctx: click.Context, daemon: bool) -> None:
    """Start watching the inbox folder for new documents."""
    console = ctx.obj["console"]
    console.print("[yellow]watch command not yet implemented[/yellow]")


@cli.command()
@click.argument("file_path", type=click.Path(exists=True))
@click.option("--output", "-o", type=click.Path(), help="Output directory")
@click.pass_context
def process(ctx: click.Context, file_path: str, output: str | None) -> None:
    """Process a single document file."""
    console = ctx.obj["console"]
    console.print("[yellow]process command not yet implemented[/yellow]")


@cli.command()
@click.argument("query")
@click.option("--type", "-t", "doc_type", help="Filter by document type")
@click.option("--from", "date_from", help="Filter from date (YYYY-MM-DD)")
@click.option("--to", "date_to", help="Filter to date (YYYY-MM-DD)")
@click.option("--limit", "-n", default=10, help="Number of results")
@click.pass_context
def search(
    ctx: click.Context,
    query: str,
    doc_type: str | None,
    date_from: str | None,
    date_to: str | None,
    limit: int,
) -> None:
    """Search across all documents."""
    console = ctx.obj["console"]
    console.print("[yellow]search command not yet implemented[/yellow]")


@cli.command()
@click.option("--document", "-d", help="Filter by document ID")
@click.option("--critical", "-c", is_flag=True, help="Show only critical")
@click.option("--count", is_flag=True, help="Show count only")
@click.pass_context
def clarify(
    ctx: click.Context,
    document: str | None,
    critical: bool,
    count: bool,
) -> None:
    """Review and answer clarification questions."""
    console = ctx.obj["console"]
    console.print("[yellow]clarify command not yet implemented[/yellow]")


@cli.command()
@click.option("--year", "-y", type=int, help="Show specific year")
@click.option("--month", "-m", type=int, help="Show specific month")
@click.option("--undated", "-u", is_flag=True, help="Show undated documents")
@click.pass_context
def timeline(
    ctx: click.Context,
    year: int | None,
    month: int | None,
    undated: bool,
) -> None:
    """View documents organized by date."""
    console = ctx.obj["console"]
    console.print("[yellow]timeline command not yet implemented[/yellow]")


@cli.command()
@click.option("--usage", "-u", is_flag=True, help="Show API usage")
@click.pass_context
def stats(ctx: click.Context, usage: bool) -> None:
    """Show statistics and usage information."""
    console = ctx.obj["console"]
    console.print("[yellow]stats command not yet implemented[/yellow]")


if __name__ == "__main__":
    cli()
